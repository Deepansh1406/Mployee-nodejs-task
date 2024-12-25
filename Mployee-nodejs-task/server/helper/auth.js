// import config from "config";
// import jwt from "jsonwebtoken";
// import userModel from "../models/user";
// import apiError from './apiError';
// import responseMessage from '../../assets/responseMessage';

// module.exports = {
//   verifyToken(req, res, next) {
//     if (req.headers.token) {
//       jwt.verify(req.headers.token, config.get('jwtsecret'), async (err, result) => {
//         if (err) {
//           return res.send({ responseCode: 401, responseMessage: "Invalid token", responseResult: err });
//         }
//         else {
//           var result2 = await userModel.findOne({_id: result._id})
//           if (!result2) {
//             return res.send({ responseCode: 404, responseMessage: "User not found." });
//           }
//           else {
//             if (result2.status == "BLOCK") {
//               return res.send({ responseCode: 403, responseMessage: "Your account is blocked." });
//             }
//             else if (result2.status == "DELETE") {
//               return res.send({ responseCode: 401, responseMessage: "Your account is deleted." });
//             }
//             else {
//               req.userId = result._id;
//               req.userType = result.userType;
//               req.userDetails = result
//               next();
//             }
//           }
//         }
//       })
//     } else {
//       throw apiError.badRequest(responseMessage.NO_TOKEN);
//     }
//   },
  
//   verifyTokenBySocket: (token) => {
//     return new Promise((resolve, reject) => {
//       try {
//         if (token) {
//           jwt.verify(token, config.get('jwtsecret'), async (err, result) => {
//             if (err) {
//               reject(apiError.unauthorized());
//             }
//             else {
//               var result2 = await db.user.findOne({ where: { id: result.id } })
//               if (result2.status == "BLOCK") {
//                 reject(apiError.forbidden(responseMessage.BLOCK_BY_ADMIN));
//               }
//               else if (result2.status == "DELETE") {
//                 reject(apiError.unauthorized(responseMessage.DELETE_BY_ADMIN));
//               }
//               else {
//                 resolve(result2.id);
//               }
//             }
//           })
//         } else {
//           reject(apiError.badRequest(responseMessage.NO_TOKEN));
//         }
//       }
//       catch (e) {
//         reject(e);
//       }
//     })
//   }


// }


// module.exports = {

//   verifyToken(req, res, next) {
//     if (req.headers.token) {
//       jwt.verify(req.headers.token, process.env.JWTSECRET, (err, result) => {

//         if (err) {
//           if (err.name == "TokenExpiredError") {
//             return res.status(440).send({
//               responseCode: 440,
//               responseMessage: "Session Expired, Please login again.",
//             });
//           }
//           else {
//             throw apiError.unauthorized(responseMessage.UNAUTHORIZED);
//           }
//         }
//         else {
//         }
//       })
//     } else {
//       throw apiError.invalid(responseMessage.NO_TOKEN);
//     }
//   },
// }