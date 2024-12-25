import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import * as http from "http";
import * as path from "path";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import apiErrorHandler from '../helper/apiErrorHandler';


import createIO from "socket.io";

const app = new express();
const server = http.createServer(app);
const root = path.normalize(`${__dirname}/../..`);
const io = createIO(server, {
  transports: ["websocket"],
  pingInterval: 1000 * 60 * 5,
  pingTimeout: 1000 * 60 * 3,
  cors: {
    origin: '*',
    methods: ["GET", "POST", "PUT", "DELETE"],
  }
});

// const { ObjectId } = require("mongodb");

class ExpressServer {
  constructor() {
    app.use(express.json({ limit: '1000mb' }));

    app.use(express.urlencoded({ extended: true, limit: '1000mb' }))

    app.use(morgan('dev'))

    app.use(
      cors({
        allowedHeaders: ["Content-Type", "token", "authorization"],
        exposedHeaders: ["token", "authorization"],
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        preflightContinue: false,
      })
    );

    app.use(
      "/socket.io",
      express.static(__dirname + "/node_modules/socket.io/client-dist")
    );
  }
  router(routes) {
    routes(app);
    return this;
  }

  configureSwagger(swaggerDefinition) {
    const options = {
      // swaggerOptions : { authAction :{JWT :{name:"JWT", schema :{ type:"apiKey", in:"header", name:"Authorization", description:""}, value:"Bearer <JWT>"}}},
      swaggerDefinition,
      apis: [
        path.resolve(`${root}/server/api/v1/controllers/**/*.js`),
        path.resolve(`${root}/api.yaml`),
      ],
    };
    app.use(
      "/api-docs",
      swaggerUi.serve,
      swaggerUi.setup(swaggerJSDoc(options))
    );
    return this;
  }

  handleError() {
    app.use(apiErrorHandler);
    return this;
  }

  async configureDb(dbUrl) {
    try {
      mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('database connection established');
      return this;
    } catch (err) {
      console.error(`Error in mongodb connection ${err.message}`);
      throw err;
    }
  }

  listen(port) {
    server.listen(port, () => {
      console.log(`secure app is listening @port ${port}`, new Date().toLocaleString());
    });
    return app;
  }
}

io.on("connection", (socket) => {
  console.log("socket connected =====>>>", socket.id);
  // Private Chat between Two Users
  socket.on("initiateUserChat", async (appKey, senderDetails, receiverDetails) => {
    try {
      const senderId = senderDetails.userId;
      const receiverId = receiverDetails.userId;
      // Check if Sender & Receiver Exist in our DB for this appKey, if not then create, else update.
      const senderExist = await findOneChatUser({userId: senderDetails.userId, appKey: appKey})
      if(!senderExist){
        await createChatUser(senderDetails);
      } else{
        await updateChatUser({_id: senderExist._id}, senderDetails);
      }
      const receiverExist = await findOneChatUser({userId: receiverDetails.userId, appKey: appKey})
      if(!receiverExist){
        await createChatUser(receiverDetails);
      } else{
        await updateChatUser({_id: receiverExist._id}, receiverDetails);
      }
      const roomExist = await checkUserChatRoom({
        chatType: chatType.ONE_TO_ONE,
        'participants.userId': { $all: [senderId, receiverId] },
        'participants': { $size: 2 },
      }).exec();
      if(!roomExist){
        const obj = {
          chatType: chatType.ONE_TO_ONE,
          participants: [senderId, receiverId]
        }
        const createRoom = await createChatRoom(obj);
        io.to(socket.id).emit("userChatInitiated", {
          chatRoomId: createRoom._id,
          messages: [],
        });
      } else{
        const roomId = roomExist._id;
        const updatedData = await updateUserChatRoom(
          { _id: roomId, 'participants.userId': senderId },
          { 'participants.$.socketId': socket.id },
        );
        console.log("socket.id updated in db");
        console.log("updatedData", updatedData);
        let existingMessages = (await findUserExistingMessages({ roomId: roomId })) || [];
        let allMessages;
        if (existingMessages.length > 0) {
          allMessages = existingMessages;
        } else {
          allMessages = [];
        }
        io.to(socket.id).emit("userChatInitiated", {
          chatRoomId: roomId,
          messages: allMessages,
        });
      }
    } catch (err) {
      console.error("🚀 ~ socket.on ~ err:", err);
    }
  });

  // Handle private chat messages between 2 users
  socket.on("userSendMessage", async (data) => {
    console.log("Input Data===>>>", data);
    try {
      const { chatRoomId, senderId, receiverId, content, messageType } = data;
      const chatRoom = await checkUserChatRoom({
        _id: chatRoomId,
        chatType: chatType.ONE_TO_ONE,
        'participants.userId': { $all: [senderId, receiverId] },
        'participants': { $size: 2 },
      }).exec();
      if (chatRoom) {
        const messageObj = {
          senderId: senderId,
          receiverId: receiverId,
          chatRoomId: chatRoomId,
          content: content,
          messageType: messageType,
        };
        await saveUserMessage(messageObj);
        const senderParticipant = chatRoom.participants.find(participant => participant.userId.equals(senderId));
        const receiverParticipant = chatRoom.participants.find(participant => participant.userId.equals(receiverId));
        io.to(receiverParticipant.socketId).emit("receiveUserMessage", {
          senderId: senderId,
          receiverId: receiverId,
          chatRoomId: chatRoomId,
          content: content,
          messageType: messageType,
          createdAt: new Date(),
        });
        io.to(senderParticipant.socketId).emit("getUserMessage", {
          senderId: senderId,
          receiverId: receiverId,
          chatRoomId: chatRoomId,
          content: content,
          messageType: messageType,
          createdAt: new Date(),
        });
      }
    } catch (err) {
      console.error("🚀 ~ socket.on ~ err:", err);
    }
  });
  socket.on("disconnect", async () => {
    console.log("<<<<<<<=======------User Disconnected------=======>>>>>>");
  });
});

export default ExpressServer;