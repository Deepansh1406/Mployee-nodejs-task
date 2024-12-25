import config from "config";
import fs from "fs";
import nodemailer from "nodemailer";
import cloudinary from "cloudinary";
import jwt from "jsonwebtoken";
import mailTemplet from '../templates/mailTemplate'
import path from "path"

cloudinary.config({
  cloud_name: config.get("cloudinary.cloud_name"),
  api_key: config.get("cloudinary.api_key"),
  api_secret: config.get("cloudinary.api_secret"),
});

export default {
  getOTP: () => {
    var otp = Math.floor(1000 + Math.random() * 9000);
    return otp;
  },

  uploadSS: async(screenshotBuffer)=> {
    const fileExtension = 'png'; // Adjust based on the screenshot format if needed
    const filePath = path.join(__dirname, `temp.${fileExtension}`);
    
    // Write the buffer to a temporary file
    fs.writeFileSync(filePath, screenshotBuffer);
  
    try {
      // Upload the file to Cloudinary
      const result = await cloudinary.uploader.upload(filePath, {
        resource_type: 'image',
      });
  
      console.log("Upload succeeded:", result.secure_url);
  
      // Delete the local file after upload
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error(`Failed to delete file: ${filePath}`, err);
        } else {
          console.log(`Successfully deleted file: ${filePath}`);
        }
      });
  
      return result.secure_url;
    } catch (error) {
      console.error("Error uploading screenshot:", error.message);
      throw error; // Rethrow the error for further handling
    }
  },


  uploadfile : async (base64Data,type)=>{
    try {

      const decodeBase64Image = (dataString) => {
        const matches = dataString.match(/^data:([^;]+);base64,(.+)$/);
   
        if (!matches || matches.length !== 3) {
          throw new Error('Invalid input string');
        }
        return {
          type: matches[1],
          data: Buffer.from(matches[2], 'base64'),
        };
      };
      const getFileExtension = (mimeType) => {
        switch (mimeType) {
          case 'image/jpeg':
            return 'jpg';
          case 'image/png':
            return 'png';
          case 'application/mp3':
            return 'mp3';
          case 'application/pdf':
            return 'pdf';
          case 'audio/mpeg':
            return 'mp3';
          case 'audio/mp3':
            return 'mp3';
          case 'audio/wav':
            return 'wav';
          case 'audio/x-m4a':
          case 'audio/m4a':
            return 'm4a';
          case 'video/mp4':
            return 'mp4';
          case 'video/webm':
            return 'webm';
          // Add more cases as needed for other file types
          default:
            throw new Error('Unsupported file type');
        }
      };
      const decodedImg = decodeBase64Image(base64Data);
      console.log(`MIME Type: ${decodedImg.type}`);
      const fileExtension = getFileExtension(decodedImg.type);
      
      let filePath=path.join(__dirname, `temp.${fileExtension}`);

      console.log(filePath,"file path");
      fs.writeFileSync(filePath, decodedImg.data);
      let result 
        result = await cloudinary.v2.uploader.upload(filePath, {
          resource_type: "auto",
        });
    
    
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error(`Failed to delete file: ${filePath}`, err);
        } else {
          console.log(`Successfully deleted file: ${filePath}`);
        }
      });

      return result.secure_url;
    } catch (error) {
      console.log("getImageUrl====>>", error.message);
      throw error; // Rethrow the error for further handling
    }
  },

  getImageUrl: async (files) => {
    try {
      let filePath;

      if (Array.isArray(files)) {
        // If files is an array, use the path of the first file
        filePath = files[0].path;
      } else if (typeof files === "object") {
        // If files is an object, use its path property
        filePath = files.path;
      } else {
        throw new Error("Invalid files parameter");
      }

      const result = await cloudinary.v2.uploader.upload(filePath, {
        resource_type: "auto",
      });
      // File uploaded successfully, now delete the local file
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error(`Failed to delete file: ${filePath}`, err);
        } else {
          console.log(`Successfully deleted file: ${filePath}`);
        }
      });

      return result.secure_url;
    } catch (error) {
      console.log("getImageUrl====>>", error.message);
      throw error; // Rethrow the error for further handling
    }
  },

  generatePassword: (length) => {
    let result = "";
    let number = "0123456789";
    let specialCharacter = "@$!%*?&";
    let capitalLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let smallLetter = "abcdefghijklmnopqrstuvwxyz";
    let allChars = number + specialCharacter + capitalLetter + smallLetter;
  
    result += number[Math.floor(Math.random() * number.length)];
    result += specialCharacter[Math.floor(Math.random() * specialCharacter.length)];
    result += capitalLetter[Math.floor(Math.random() * capitalLetter.length)];
    result += smallLetter[Math.floor(Math.random() * smallLetter.length)];

    for (let i = length - 4; i > 0; --i) {
      result += allChars[Math.floor(Math.random() * allChars.length)];
    }
  

    result = result.split('').sort(() => Math.random() - 0.5).join('');
  
    return result;
  },

  sendSmsTwilio: async (mobileNumber, otp) => {
    try {
      const client = twilio(accountSid, authToken);

      let response = await client.messages.create({
        body: `Your mobile One Time Password (OTP) to log into Ponttual App is ${otp}.`,
        from: twilioNumber,
        to: mobileNumber,
      });
      console.log("🚀 ~ sendSmsTwilio: ~ sent:", response);
      return response;
    } catch (error) {
      console.log("🚀 ~ sendSmsTwilio: ~ error:", error);
    }
  },

  getToken(user) {
    const payload = {
      _id: user._id,
      email: user.email,
      firstName: user.firstName,
      role: user.role,
    };
    const jwtsecret = config.get("jwtsecret");
    return jwt.sign(payload, jwtsecret);
  },

  getExpireTime() {
    let currTime = Date.now();
    return currTime + 24 * 60 * 1000;
  },

  sendMailNewSubaAdmin: async (name, email, password) => {
    let html = mailTemplet.adminAccountCreated(name, password,"PP Admin");
    var transporter = nodemailer.createTransport({
      service: config.nodemailer.service,
      auth: {
        user: config.nodemailer.email,
        pass: config.nodemailer.password,
      },
    });
    var mailOptions = {
      from: "<do_not_reply@gmail.com>",
      to: email,
      subject: "Welcome to PersonaPro.ai – PP Admin Account Created",
      html: html,
    };
    try {
      console.log("Email sent successfully");
      return await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  },
  newSubAdmin: async ( email,userName,password,PackageName,ContractStartDate,ContractEndDate,ContractTerms,CustomerType,ContractedUsers,MediaCredit,ActiveMediaCredits) => {

   
    let html = mailTemplet.newSubAdmin(userName,password,PackageName,ContractStartDate,ContractEndDate,ContractTerms,CustomerType,ContractedUsers,MediaCredit,ActiveMediaCredits);
    var transporter = nodemailer.createTransport({
      service: config.nodemailer.service,
      auth: {
        user: config.nodemailer.email,
        pass: config.nodemailer.password,
      },
    });
    var mailOptions = {
      from: "<do_not_reply@gmail.com>",
      to: email,
      subject: "Welcome to PersonaPro.ai – Your Account Details and Contract Information",
      html: html,
    };
    try {
      console.log("Email sent successfully");
      return await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  },

  sendHVOTemplateMail: async ( email, url) => {
    let formatDate = (date) => {
      const now = new Date(date);
      const day = String(now.getDate()).padStart(2, '0');
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const month = months[now.getMonth()]; // Get the abbreviated month name
      const year = now.getFullYear();
    
      return `${month} ${day}, ${year}`;
    }
    let date =formatDate(Date.now())
    let html = mailTemplet.hvoTemplate( url,date);
    var transporter = nodemailer.createTransport({
      service: config.nodemailer.service,
      auth: {
        user: config.nodemailer.email,
        pass: config.nodemailer.password,
      },
    });
    var mailOptions = {
      from: "<do_not_reply@gmail.com>",
      to: email,
      subject: "Your website templete created.",
      html: html,
    };
    try {
      console.log("Email sent successfully",email);
      return await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  },
  sendVideoMail: async (name, email, url,status,errorMessage) => {
    let formatDate = (date) => {
      const now = new Date(date);
      const day = String(now.getDate()).padStart(2, '0');
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const month = months[now.getMonth()]; // Get the abbreviated month name
      const year = now.getFullYear();
    
      return `${month} ${day}, ${year}`;
    }
    let date =formatDate(Date.now())
    let html = mailTemplet.videoTemplate(name, url,date,status,errorMessage);
    var transporter = nodemailer.createTransport({
      service: config.nodemailer.service,
      auth: {
        user: config.nodemailer.email,
        pass: config.nodemailer.password,
      },
    });
    var mailOptions = {
      from: "<do_not_reply@gmail.com>",
      to: email,
      subject: "Your video templete created.",
      html: html,
    };
    try {
      console.log("Email sent successfully",email);
      return await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  },

  blockUserAccount: async (name, email) => {
    let formatDate = (date) => {
      const now = new Date(date);
      const day = String(now.getDate()).padStart(2, '0');
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const month = months[now.getMonth()]; // Get the abbreviated month name
      const year = now.getFullYear();
    
      return `${month} ${day}, ${year}`;
    }
    let date =formatDate(Date.now())
    console.log(date,name ,email);
    let html = mailTemplet.blockUser(name,date);
    var transporter = nodemailer.createTransport({
      service: config.nodemailer.service,
      auth: {
        user: config.nodemailer.email,
        pass: config.nodemailer.password,
      },
    });
    var mailOptions = {
      from: "<do_not_reply@gmail.com>",
      to: email,
      subject: "Important Notice: Your PersonaPro.ai Account Has Been Blocked",
      html: html,
    };
    try {
      console.log("Email sent successfully");
      return await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  },

  suspendAccount: async (name, email) => {
    let formatDate = (date) => {
      const now = new Date(date);
      const day = String(now.getDate()).padStart(2, '0');
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const month = months[now.getMonth()]; // Get the abbreviated month name
      const year = now.getFullYear();
    
      return `${month} ${day}, ${year}`;
    }
    let date =formatDate(Date.now())
    let html = mailTemplet.suspendUser(name,date);
    var transporter = nodemailer.createTransport({
      service: config.nodemailer.service,
      auth: {
        user: config.nodemailer.email,
        pass: config.nodemailer.password,
      },
    });
    var mailOptions = {
      from: "<do_not_reply@gmail.com>",
      to: email,
      subject: "Important Notice: Your PersonaPro.ai Account Has Been Suspend",
      html: html,
    };
    try {
      console.log("Email sent successfully");
      return await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  },
  deleteCompanyUser: async (name, email) => {
    let formatDate = (date) => {
      const now = new Date(date);
      const day = String(now.getDate()).padStart(2, '0');
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const month = months[now.getMonth()]; // Get the abbreviated month name
      const year = now.getFullYear();
    
      return `${month} ${day}, ${year}`;
    }
    let date =formatDate(Date.now())
    let html = mailTemplet.deleteCompanyUser(name,date);
    var transporter = nodemailer.createTransport({
      service: config.nodemailer.service,
      auth: {
        user: config.nodemailer.email,
        pass: config.nodemailer.password,
      },
    });
    var mailOptions = {
      from: "<do_not_reply@gmail.com>",
      to: email,
      subject: "Important Notice: Your PersonaPro.ai Account Has Been Suspend",
      html: html,
    };
    try {
      console.log("Email sent successfully");
      return await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  },
  unsuspendAccount: async (name, email) => {
    let formatDate = (date) => {
      const now = new Date(date);
      const day = String(now.getDate()).padStart(2, '0');
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const month = months[now.getMonth()]; // Get the abbreviated month name
      const year = now.getFullYear();
    
      return `${month} ${day}, ${year}`;
    }
    
    let date =formatDate(Date.now())
    let html = mailTemplet.unsuspendUser(name,date);
    var transporter = nodemailer.createTransport({
      service: config.nodemailer.service,
      auth: {
        user: config.nodemailer.email,
        pass: config.nodemailer.password,
      },
    });
    var mailOptions = {
      from: "<do_not_reply@gmail.com>",
      to: email,
      subject: "Important Notice: Your PersonaPro.ai Account Has Been Unsuspend",
      html: html,
    };
    try {
      console.log("Email sent successfully");
      return await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  },

  userActive: async (userName,email) => {
    let formatDate = (date) => {
      const now = new Date(date);
      const day = String(now.getDate()).padStart(2, '0');
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const month = months[now.getMonth()]; // Get the abbreviated month name
      const year = now.getFullYear();
    
      return `${month} ${day}, ${year}`;
    }
    let activationDate =formatDate(Date.now())
  
    
    let html = mailTemplet.userActivated(userName,email,activationDate);
    var transporter = nodemailer.createTransport({
      service: config.nodemailer.service,
      auth: {
        user: config.nodemailer.email,
        pass: config.nodemailer.password,
      },
    });
    var mailOptions = {
      from: "<do_not_reply@gmail.com>",
      to: email,
      subject: "Welcome to PersonaPro.ai – Your Account Is Now Active",
      html: html,
    };
    try {
      console.log("Email sent successfully");
      return await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  },



  sendMailForgotPassword: async (name, email, otp) => {
    let html = mailTemplet.otpForVarification(name, otp);
    var transporter = nodemailer.createTransport({
      service: config.nodemailer.service,
      auth: {
        user: config.nodemailer.email,
        pass: config.nodemailer.password,
      },
    });
    var mailOptions = {
      from: "<do_not_reply@gmail.com>",
      to: email,
      subject: "Your One-Time OTP for Password Recovery",
      html: html,
    };
    try {
      console.log("Email sent successfully",email);
      return await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  },

  sendMailForpasswordChange: async (email,userName,role) => {
    let formatDate = (date) => {
      const now = new Date(date);
      const day = String(now.getDate()).padStart(2, '0');
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const month = months[now.getMonth()]; // Get the abbreviated month name
      const year = now.getFullYear();
    
      return `${month} ${day}, ${year}`;
    }
    let activationDate =formatDate(Date.now())
    let html = mailTemplet.passwordResetConfirmation(userName,role,email,activationDate);
    var transporter = nodemailer.createTransport({
      service: config.nodemailer.service,
      auth: {
        user: config.nodemailer.email,
        pass: config.nodemailer.password,
      },
    });
    var mailOptions = {
      from: "<do_not_reply@gmail.com>",
      to: email,
      subject: "Password Reset Confirmation – PersonaPro.ai Admin Account",
      html: html,
    };
    try {
      return await transporter.sendMail(mailOptions);
    
    } catch (error) {
      console.error("Error sending email:", error);
    }
  },



  sendMailCreateUser: async (name, email, password) => {
    let formatDate = (date) => {
      const now = new Date(date);
      const day = String(now.getDate()).padStart(2, '0');
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const month = months[now.getMonth()]; // Get the abbreviated month name
      const year = now.getFullYear();
    
      return `${month} ${day}, ${year}`;
    }
    let activationDate =formatDate(Date.now())
    let html = mailTemplet.mailCreateUser(name,email,password,activationDate);
    var transporter = nodemailer.createTransport({
      service: config.nodemailer.service,
      auth: {
        user: config.nodemailer.email,
        pass: config.nodemailer.password,
      },
    });
    var mailOptions = {
      from: "<do_not_reply@gmail.com>",
      to: email,
      subject: `Welcome to ${name} on PersonaPro.ai`,
      html: html,
    };
    try {
      console.log("Email sent successfully");
      return await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  },
  sendMailSuspendAccount: async (name,email, ppAdminName) => {
    let html = mailTemplet.mailSuspendUser(name, ppAdminName);
    var transporter = nodemailer.createTransport({
      service: config.nodemailer.service,
      auth: {
        user: config.nodemailer.email,
        pass: config.nodemailer.password,
      },
    });
    var mailOptions = {
      from: "<do_not_reply@gmail.com>",
      to: email,
      subject: "Account suspended",
      html: html,
    };
    try {
      console.log("Email sent successfully");
      return await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  },
  sendMailActiveAccount: async (name,email, ppAdminName) => {
    let html = mailTemplet.mailActivatedUser(name, ppAdminName);
    var transporter = nodemailer.createTransport({
      service: config.nodemailer.service,
      auth: {
        user: config.nodemailer.email,
        pass: config.nodemailer.password,
      },
    });
    var mailOptions = {
      from: "<do_not_reply@gmail.com>",
      to: email,
      subject: "Account activated",
      html: html,
    };
    try {
      console.log("Email sent successfully");
      return await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  },


  projectAssiged: async (email,userName,templateName,sheetName) => {
    let formatDate = (date) => {
      const now = new Date(date);
      const day = String(now.getDate()).padStart(2, '0');
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const month = months[now.getMonth()]; // Get the abbreviated month name
      const year = now.getFullYear();
    
      return `${month} ${day}, ${year}`;
    }
    let activationDate =formatDate(Date.now())
    let html = mailTemplet.projectAssign(userName,templateName,activationDate,sheetName);
    var transporter = nodemailer.createTransport({
      service: config.nodemailer.service,
      auth: {
        user: config.nodemailer.email,
        pass: config.nodemailer.password,
      },
    });
    var mailOptions = {
      from: "<do_not_reply@gmail.com>",
      to: email,
      subject: "New Project Assigned: [Project Name] – Sheets and Responsibilities Awaiting Your Action on PersonaPro.ai",
      html: html,
    };
    try {
      console.log("Email sent successfully");
      return await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  },
};
