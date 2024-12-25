const supportEmail = "mobiloitte@mailinator.com"
const webUrl = 'https://aivideo-generatorpune.mobiloitte.io/'
const number = "+91 1234XXX890"
module.exports = {
  subAdminPassword(name, password) {
    return `
    <div style="font-family: Helvetica, Arial, sans-serif; min-width: 1000px; overflow: auto; line-height: 2">
      <div style="margin: 50px auto; width: 70%; padding: 20px 0">
        <div style="border-bottom: 1px solid #eee">
          <table style="width: 100%">
            <tr>
              <th></th>
            </tr>
          </table>
        </div>
        <p style="font-size: 1.1em">Hi, ${name}</p>
        <p>Your account has been successfully created. Your login password is:</p>
        <p><strong>Password:</strong> ${password}</p>
        <p>Please make sure to change this password after your first login for security reasons.</p>
        <p style="font-size: 0.9em;">Thank You,</p>
        <hr style="border: none; border-top: 1px solid #eee" />
        <div style="float: right; padding: 8px 0; color: #aaa; font-size: 0.8em; line-height: 1; font-weight: 300"></div>
      </div>
    </div>`;
  },
  passwordChangeNotification(name) {
    return `
      <div style="font-family: Helvetica, Arial, sans-serif; min-width: 1000px; overflow: auto; line-height: 2">
        <div style="margin: 50px auto; width: 70%; padding: 20px 0">
          <div style="border-bottom: 1px solid #eee">
            <table style="width: 100%">
              <tr>
                <th></th>
              </tr>
            </table>
          </div>
          <p style="font-size: 1.1em">Hi, ${name}</p>
          <p>Your password has been successfully changed.</p>
          <p>If you did not request this change, please contact our support team immediately.</p>
          <p>We recommend you review your recent account activity and change your password again if you suspect any unauthorized access.</p>
          <p style="font-size: 0.9em;">Thank You,</p>
          <hr style="border: none; border-top: 1px solid #eee" />
          <div style="float: right; padding: 8px 0; color: #aaa; font-size: 0.8em; line-height: 1; font-weight: 300"></div>
        </div>
      </div>`;
  },
//   mailCreateUser(name, password) {
//     return `
//     <div style="font-family: Helvetica, Arial, sans-serif; min-width: 1000px; overflow: auto; line-height: 2">
//       <div style="margin: 50px auto; width: 70%; padding: 20px 0">
//         <div style="border-bottom: 1px solid #eee">
//           <table style="width: 100%">
//             <tr>
//               <th></th>
//             </tr>
//           </table>
//         </div>
//         <p style="font-size: 1.1em">Hi, ${name}</p>
//         <p>Your user account has been successfully created. Your login password is:</p>
//         <p><strong>Password:</strong> ${password}</p>
//         <p>Please make sure to change this password after your first login for security reasons.</p>
//         <p style="font-size: 0.9em;">Thank You,</p>
//         <hr style="border: none; border-top: 1px solid #eee" />
//         <div style="float: right; padding: 8px 0; color: #aaa; font-size: 0.8em; line-height: 1; font-weight: 300"></div>
//       </div>
//     </div>`;
//   },

  passwordResetOtp(name, otp) {
    return ``;
  },

  forgotPasswordOtp(name, otp) {
    return `
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #fff; color: #ffffff; font-family: Arial, sans-serif; background-color: #ffffff;">
    <div style="width: 100%; max-width: 600px; margin: 0 auto; ">
        <!-- Header -->
        <div style="text-align: center; padding: 20px;">
            <img src="https://res.cloudinary.com/dtnhbdmpd/image/upload/v1723615614/ojkddwgfoozfmnewwnzo.png" alt="Logo" style="max-width: 200px; background-color: white;">
        </div>

        <!-- Content -->
        <div style="padding: 10px; text-align: start; color: black; background-color: #0358AC !important;" >
            <p style="color: black"><strong>Dear ${name},</strong></p>
            <p style="color: black">To proceed with your password reset request, please enter the following 4-digit code in the provided field on our website.</p>
            <p style="color: black"><strong>Your Verification Code: </p>
            <p style="color: black"></strong><strong style="font-size: 2rem; ">${otp}</strong></p>
            <p style="color: black">This code is valid for a limited time and can only be used for this request. If you did not request a password reset, please contact our support team immediately.</p>
            <p style="color: black"><strong>Next Steps:</strong></p>
            <ol style="color: black">
                <li style="color: black"><strong>Enter the Code:</strong> Use the code above to complete your password reset on the Enter OTP screen.</li>
                <li style="color: black"><strong>Secure Your Account:</strong> After resetting your password, consider updating your security settings to further protect your account.</li>
                <li style="color: black"><strong>Contact Support:</strong> If you need any assistance, reach out to us at [Support Email Address]. Your security is our priority, and we appreciate your prompt attention to this matter.</li>
            </ol>
            <p style="color: black">Best Regards,<br>PersonaPro.ai</p>
        </div>

    </div>
</body>


`;
  },

  hvoTemplate( url,creationDate) {
    return `
        <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; color: #ffffff; font-family: Arial, sans-serif; background-color: #ffffff;">
    <div style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <!-- Header -->
        <div style="text-align: center; padding: 20px; color: white;">
            <img src="https://res.cloudinary.com/dtnhbdmpd/image/upload/v1723615614/ojkddwgfoozfmnewwnzo.png" alt="Logo" style="max-width: 200px; background-color: white; border-radius: 5px;">
        </div>

        <!-- Content -->
        <div style="padding: 20px; color: #333;">
            <p>Hi,</p>
            <p>We are pleased to inform you that your template has been successfully created.</p>
            <p><strong>Details of Creation:</strong></p>
            <ul>
                <li><strong>Date of Creation:</strong> ${creationDate}</li>
                <li><strong>Access Your Template Here:</strong> <a href="${url}" style="color: #004aad;">${url}</a></li>
            </ul>
            <p>Thank you for choosing our service. You can now access and start using your template by clicking the link above.</p>
            <p>If you have any questions or need assistance, feel free to reach out to our support team.</p>
            <p>Best Regards,<br>PersonaPro.ai</p>
        </div>

        <!-- Footer -->
        <div style="text-align: center; padding: 20px; background-color: #f4f4f4; color: #777; font-size: 12px;">
            <p>&copy; ${new Date().getFullYear()} PersonaPro.ai. All rights reserved.</p>
        </div>
    </div>
</body>
    `;
  },
  videoTemplate(userName, url, creationDate, status, errorMessage) {
    return `
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; color: #ffffff; font-family: Arial, sans-serif; background-color: #ffffff;">
            <div style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <!-- Header -->
                <div style="text-align: center; padding: 20px; color: white;">
                    <img src="https://res.cloudinary.com/dtnhbdmpd/image/upload/v1723615614/ojkddwgfoozfmnewwnzo.png" alt="Logo" style="max-width: 200px; background-color: white; border-radius: 5px;">
                </div>

                <!-- Content -->
                <div style="padding: 20px; color: #333;">
                    <p>Dear ${userName},</p>
                    <p>We are pleased to inform you that your template has been successfully created.</p>
                    <p><strong>Details of Creation:</strong></p>
                    <ul>
                        <li><strong>Date of Creation:</strong> ${creationDate}</li>
                        <li><strong>Access Your Template Here:</strong> <a href="${url}" style="color: #004aad;">${url}</a></li>
                        <li><strong>Status:</strong> ${status}</li>
                        <li><strong>Error Message:</strong> ${errorMessage || 'N/A'}</li>
                    </ul>
                    <p>Thank you for choosing our service. You can now access and start using your template by clicking the link above.</p>
                    <p>If you have any questions or need assistance, feel free to reach out to our support team.</p>
                    <p>Best Regards,<br>PersonaPro.ai</p>
                </div>

                <!-- Footer -->
                <div style="text-align: center; padding: 20px; background-color: #f4f4f4; color: #777; font-size: 12px;">
                    <p>&copy; ${new Date().getFullYear()} PersonaPro.ai. All rights reserved.</p>
                </div>
            </div>
        </body>
    `;
},
  mailSuspendUser(name, adminName) {
    return `
    <div style="font-family: Helvetica, Arial, sans-serif; min-width: 1000px; overflow: auto; line-height: 2; background-color: #ffffff;">
      <div style="margin: 50px auto; width: 70%; padding: 20px 0">
        <div style="border-bottom: 1px solid #eee">
          <table style="width: 100%">
            <tr>
              <th></th>
            </tr>
          </table>
        </div>
        <p style="font-size: 1.1em">Hi, ${name}</p>
        <p>We regret to inform you that your user account has been suspended. This action has been taken by ${adminName}. If you believe this is a mistake or if you have any questions, please contact our support team.</p>
        <p style="font-size: 0.9em;">Thank You,</p>
        <hr style="border: none; border-top: 1px solid #eee" />
        <div style="float: right; padding: 8px 0; color: #aaa; font-size: 0.8em; line-height: 1; font-weight: 300"></div>
      </div>
    </div>`;
  },
  mailActivatedUser(name, adminName) {
    return `
    <div style="font-family: Helvetica, Arial, sans-serif; min-width: 1000px; overflow: auto; line-height: 2; background-color: #ffffff;">
      <div style="margin: 50px auto; width: 70%; padding: 20px 0">
        <div style="border-bottom: 1px solid #eee">
          <table style="width: 100%">
            <tr>
              <th></th>
            </tr>
          </table>
        </div>
        <p style="font-size: 1.1em">Hi, ${name}</p>
        <p>We regret to inform you that your user account has been activated. This action has been taken by ${adminName}. If you believe this is a mistake or if you have any questions, please contact our support team.</p>
        <p style="font-size: 0.9em;">Thank You,</p>
        <hr style="border: none; border-top: 1px solid #eee" />
        <div style="float: right; padding: 8px 0; color: #aaa; font-size: 0.8em; line-height: 1; font-weight: 300"></div>
      </div>
    </div>`;
  },
  newSubAdmin(userName,password,PackageName,ContractStartDate,ContractEndDate,ContractTerms,CustomerType,ContractedUsers,MediaCredit,ActiveMediaCredits){
    return `
   <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; color: #ffffff; font-family: Arial, sans-serif; background-color: #ffffff;">
    <div style="width: 100%; max-width: 600px; margin: 0 auto; ">
        <!-- Header -->
        <div style="text-align: center; padding: 20px;">
            <img src="https://res.cloudinary.com/dtnhbdmpd/image/upload/v1723615614/ojkddwgfoozfmnewwnzo.png" alt="Logo" style="max-width: 200px; background-color: white;">
        </div>

        <!-- Content -->
        <div style="padding: 20px; text-align: start; color:#000 !important;">
            <p>Dear ${userName},</p>
            <p>We are pleased to inform you that your account with PersonaPro.ai has been successfully created. Below are the details of your account and the associated contract terms:</p>
            <p><strong>Package Name:</strong> ${PackageName}</p>
            <p><strong>Contract Start Date:</strong> ${ContractStartDate}</p>
            <p><strong>Contract End Date:</strong> ${ContractEndDate}</p>
            <p><strong>Contract Terms:</strong> ${ContractTerms}</p>
            <p><strong>Customer Type:</strong> ${CustomerType}</p>
            <p><strong>Contracted Users:</strong> ${ContractedUsers}</p>
            <p><strong>Media Credit:</strong> ${MediaCredit}</p>
            <p><strong>Active Media Credits:</strong> ${ActiveMediaCredits}</p>
            <p><strong>Password:</strong> ${password}</p>
            <p>Please review the above details carefully. If you have any questions or require further assistance, feel free to contact our support team.</p>
            <p>We encourage you to review the above details carefully. Should you have any questions or require any clarifications, our dedicated support team is available to assist you at any time.</p>
            <p>At PersonaPro.ai, our mission is to empower your business with cutting-edge tools and solutions. We are excited to embark on this journey with you and look forward to a successful partnership.</p>
            <p>Thank you for choosing PersonaPro.ai. We look forward to supporting your business needs.</p>
            <p>Best Regards,<br>PersonaPro.ai</p>
        </div>

        <!-- Footer -->
        <div style="text-align: center; padding: 20px; font-size: 12px;">
         
          <img src="https://res.cloudinary.com/dtnhbdmpd/image/upload/v1723615614/ojkddwgfoozfmnewwnzo.png" alt="Logo" style="max-width: 200px; background-color: white;">
        </div>
    </div>
</body>

    `
  },
  blockUser(userName,blockDate){
    return `
 <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; color: #ffffff; font-family: Arial, sans-serif; background-color: #ffffff;">
    <div style="width: 100%; max-width: 600px; margin: 0 auto;">
        <!-- Header -->
        <div style="text-align: center; padding: 20px;">
            <img src="https://res.cloudinary.com/dtnhbdmpd/image/upload/v1723615614/ojkddwgfoozfmnewwnzo.png" alt="Logo" style="max-width: 200px; background-color: white;">
        </div>

        <!-- Content -->
        <div style="padding: 20px; text-align: start; color:#000 !important;">
            <p>Dear ${userName},</p>
            <p>We regret to inform you that your account on PersonaPro.ai has been temporarily blocked by our administrative team. This action has been taken in accordance with our policies and is intended to address specific concerns related to your account.</p>
            <p><strong>Details of the Block:</strong></p>
            <ul>
                <li><strong>Blocked By:</strong> PersonaPro.ai Administrative Team</li>
                <li><strong>Date of Block:</strong> ${blockDate}</li>
            </ul>
            <p>During this period, you will not be able to access your account or utilize any of the services provided by PersonaPro.ai. If you believe this action has been taken in error or if you wish to discuss the matter further, we encourage you to contact our support team at your earliest convenience.</p>
            <p><strong>Next Steps:</strong></p>
            <ol>
                <li><strong>Contact Support:</strong> Reach out to us at ${supportEmail} to discuss the details of your account block.</li>
                <li><strong>Review Account Status:</strong> Our team will review your case and work with you to resolve any outstanding issues as quickly as possible.</li>
                <li><strong>Await Further Communication:</strong> You will receive a follow-up email with the outcome of the review and any steps needed to restore your account access.</li>
            </ol>
            <p>We understand that this may cause inconvenience, and we appreciate your understanding and cooperation as we work to maintain a safe and compliant environment for all users.</p>
            <p>Thank you for your attention to this matter.</p>
            <p>Best Regards,<br>PersonaPro.ai</p>
        </div>
    </div>
</body>


    `
  },
  suspendUser(userName,blockDate){
    return `
 <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; color: #ffffff; font-family: Arial, sans-serif; background-color: #ffffff;">
    <div style="width: 100%; max-width: 600px; margin: 0 auto;">
        <!-- Header -->
        <div style="text-align: center; padding: 20px;">
            <img src="https://res.cloudinary.com/dtnhbdmpd/image/upload/v1723615614/ojkddwgfoozfmnewwnzo.png" alt="Logo" style="max-width: 200px; background-color: white;">
        </div>

        <!-- Content -->
        <div style="padding: 20px; text-align: start; color:#000 !important;">
            <p>Dear ${userName},</p>
            <p>We regret to inform you that your account on PersonaPro.ai has been temporarily suspend by our administrative team. This action has been taken in accordance with our policies and is intended to address specific concerns related to your account.</p>
            <p><strong>Details of the Block:</strong></p>
            <ul>
                <li><strong>Suspend By:</strong> PersonaPro.ai Administrative Team</li>
                <li><strong>Date of Suspend:</strong> ${blockDate}</li>
            </ul>
            <p>During this period, you will not be able to access your account or utilize any of the services provided by PersonaPro.ai. If you believe this action has been taken in error or if you wish to discuss the matter further, we encourage you to contact our support team at your earliest convenience.</p>
            <p><strong>Next Steps:</strong></p>
            <ol>
                <li><strong>Contact Support:</strong> Reach out to us at ${supportEmail} to discuss the details of your account block.</li>
                <li><strong>Review Account Status:</strong> Our team will review your case and work with you to resolve any outstanding issues as quickly as possible.</li>
                <li><strong>Await Further Communication:</strong> You will receive a follow-up email with the outcome of the review and any steps needed to restore your account access.</li>
            </ol>
            <p>We understand that this may cause inconvenience, and we appreciate your understanding and cooperation as we work to maintain a safe and compliant environment for all users.</p>
            <p>Thank you for your attention to this matter.</p>
            <p>Best Regards,<br>PersonaPro.ai</p>
        </div>
    </div>
</body>


    `
  },
  suspendUser(userName,activeData){
    return `
 <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; color: #ffffff; font-family: Arial, sans-serif; background-color: #ffffff;">
    <div style="width: 100%; max-width: 600px; margin: 0 auto;">
        <!-- Header -->
        <div style="text-align: center; padding: 20px;">
            <img src="https://res.cloudinary.com/dtnhbdmpd/image/upload/v1723615614/ojkddwgfoozfmnewwnzo.png" alt="Logo" style="max-width: 200px; background-color: white;">
        </div>

        <!-- Content -->
        <div style="padding: 20px; text-align: start; color:#000 !important;">
            <p>Dear ${userName},</p>
            <p>We regret to inform you that your account on PersonaPro.ai has been temporarily suspend by our administrative team. This action has been taken in accordance with our policies and is intended to address specific concerns related to your account.</p>
            <p><strong>Details of the Block:</strong></p>
            <ul>
                <li><strong>Suspend By:</strong> PersonaPro.ai Administrative Team</li>
                <li><strong>Date of Suspend:</strong> ${blockDate}</li>
            </ul>
            <p>During this period, you will not be able to access your account or utilize any of the services provided by PersonaPro.ai. If you believe this action has been taken in error or if you wish to discuss the matter further, we encourage you to contact our support team at your earliest convenience.</p>
            <p><strong>Next Steps:</strong></p>
            <ol>
                <li><strong>Contact Support:</strong> Reach out to us at ${supportEmail} to discuss the details of your account block.</li>
                <li><strong>Review Account Status:</strong> Our team will review your case and work with you to resolve any outstanding issues as quickly as possible.</li>
                <li><strong>Await Further Communication:</strong> You will receive a follow-up email with the outcome of the review and any steps needed to restore your account access.</li>
            </ol>
            <p>We understand that this may cause inconvenience, and we appreciate your understanding and cooperation as we work to maintain a safe and compliant environment for all users.</p>
            <p>Thank you for your attention to this matter.</p>
            <p>Best Regards,<br>PersonaPro.ai</p>
        </div>
    </div>
</body>


    `
  },
  unsuspendUser(userName, activeDate){
    return `
 <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; color: #ffffff; font-family: Arial, sans-serif; background-color: #ffffff;">
    <div style="width: 100%; max-width: 600px; margin: 0 auto;">
        <!-- Header -->
        <div style="text-align: center; padding: 20px;">
            <img src="https://res.cloudinary.com/dtnhbdmpd/image/upload/v1723615614/ojkddwgfoozfmnewwnzo.png" alt="Logo" style="max-width: 200px; background-color: white;">
        </div>

        <!-- Content -->
        <div style="padding: 20px; text-align: start; color:#000 !important;">
            <p>Dear ${userName},</p>
            <p>We are pleased to inform you that your account on PersonaPro.ai has been successfully reinstated by our administrative team. You can now access your account and resume using all services provided by PersonaPro.ai.</p>
            <p><strong>Details of the Reinstatement:</strong></p>
            <ul>
                <li><strong>Reinstated By:</strong> PersonaPro.ai Administrative Team</li>
                <li><strong>Date of Reinstatement:</strong> ${activeDate}</li>
            </ul>
            <p>If you have any further questions or need assistance with your account, please feel free to reach out to our support team at any time.</p>
            <p>We appreciate your patience and understanding during this process and are glad to have you back with us.</p>
            <p>Thank you for choosing PersonaPro.ai!</p>
            <p>Best Regards,<br>PersonaPro.ai</p>
        </div>
    </div>
</body>
    `
  }
,
  userActivated(userName,email,activationDate){
    return `
 <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; color: #ffffff; font-family: Arial, sans-serif; background-color: #ffffff;">
    <div style="width: 100%; max-width: 600px; margin: 0 auto;">
        <!-- Header -->
        <div style="text-align: center; padding: 20px;">
            <img src="https://res.cloudinary.com/dtnhbdmpd/image/upload/v1723615614/ojkddwgfoozfmnewwnzo.png" alt="Logo" style="max-width: 200px; background-color: white;">
        </div>

        <!-- Content -->
        <div style="padding: 20px; text-align: start; color:#000 !important;">
            <p>Dear ${userName},</p>
            <p>We are pleased to inform you that your account with PersonaPro.ai has been successfully activated. You can now access our platform and start utilizing the services and features available to you.</p>
            <p><strong>Account Details:</strong></p>
            <ul>
                <li><strong>Email address:</strong> ${email}</li>
                <li><strong>Activation Date:</strong> ${activationDate}</li>
            </ul>
            <p>To get started, simply log in to your account using the credentials provided during the registration process. If you encounter any issues or have any questions, our support team is here to assist you.</p>
            <p><strong>Next Steps:</strong></p>
            <ol>
                <li><strong>Log In:</strong> Visit ${webUrl} and enter your credentials to access your account.</li>
                <li><strong>Explore Features:</strong> Take a moment to explore the platform and familiarize yourself with the tools and resources available.</li>
                <li><strong>Get Support:</strong> If you need any help, please contact us at ${supportEmail}. We are excited to have you on board and look forward to supporting your success with PersonaPro.ai.</li>
            </ol>
            <p>Best Regards,<br>PersonaPro.ai</p>
        </div>
    </div>
</body>



    `
  },
  trailExpired(userName,expiredData,packageName,ContractEndDate){
    return `
 <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; color: #ffffff; font-family: Arial, sans-serif; background-color: #ffffff;">
    <div style="width: 100%; max-width: 600px; margin: 0 auto;">
        <!-- Header -->
        <div style="text-align: center; padding: 20px;">
            <img src="https://res.cloudinary.com/dtnhbdmpd/image/upload/v1723615614/ojkddwgfoozfmnewwnzo.png" alt="Logo" style="max-width: 200px; background-color: white;">
        </div>

        <!-- Content -->
        <div style="padding: 20px; text-align: start; color:#000 !important;">
            <p>Dear ${userName},</p>
            <p>We hope you’ve enjoyed exploring the features of PersonaPro.ai during your trial period. We wanted to remind you that your trial is set to expire on ${expiredData}.</p>
            <p><strong>Trial Details:</strong></p>
            <ul>
                <li><strong>Package Name:</strong> ${packageName}</li>
                <li><strong>Trial End Date:</strong> ${ContractEndDate}</li>
            </ul>
            <p>To continue using PersonaPro.ai without interruption, we encourage you to upgrade to a full account before your trial expires. If you have any questions or need assistance with the upgrade process, our support team is here to help.</p>
            <p><strong>Next Steps:</strong></p>
            <ol>
                <li><strong>Contact Support:</strong> If you need further assistance, reach out to us at ${supportEmail}.</li>
            </ol>
            <p>Thank you for choosing PersonaPro.ai. We look forward to continuing our partnership.</p>
            <p>Best Regards,<br>PersonaPro.ai</p>
        </div>
    </div>
</body>



    `
  },
  userExpired(userName,password,PackageName,ContractStartDate,ContractEndDate,ContractTerms,CustomerType,ContractedUsers,MediaCredit,ActiveMediaCredits){
    return `
 <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; color: #ffffff; font-family: Arial, sans-serif; background-color: #ffffff;">
    <div style="width: 100%; max-width: 600px; margin: 0 auto;">
        <!-- Header -->
        <div style="text-align: center; padding: 20px;">
            <img src="https://res.cloudinary.com/dtnhbdmpd/image/upload/v1723615614/ojkddwgfoozfmnewwnzo.png" alt="Logo" style="max-width: 200px; background-color: white;">
        </div>

        <!-- Content -->
        <div style="padding: 20px; text-align: start; color:#000 !important;">
            <p>Dear ${userName},</p>
            <p>This is a friendly reminder that your current monthly contract with PersonaPro.ai will expire on ${userName}.</p>
            <p><strong>Contract Details:</strong></p>
            <ul>
                <li><strong>Package Name:</strong> ${userName}</li>
                <li><strong>Contract End Date:</strong> ${userName}</li>
                <li><strong>Contract Term:</strong> ${userName}</li>
            </ul>
            <p>To avoid any disruption in service, please ensure that your contract is renewed before the expiration date. You can easily renew or adjust your plan by logging into your account.</p>
            <p><strong>Next Steps:</strong></p>
            <ol>
                <li><strong>Contact Support:</strong> If you have questions or need help, contact us at ${supportEmail}.</li>
            </ol>
            <p>We appreciate your continued trust in PersonaPro.ai and look forward to serving you in the future.</p>
            <p>Best Regards,<br>PersonaPro.ai</p>
        </div>
    </div>
</body>`
  },
  adminAccountCreated(userName,password,AdminRole){
    return `
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; color: #ffffff; font-family: Arial, sans-serif; background-color: #ffffff;">
    <div style="width: 100%; max-width: 600px; margin: 0 auto;">
        <!-- Header -->
        <div style="text-align: center; padding: 20px;">
            <img src="https://res.cloudinary.com/dtnhbdmpd/image/upload/v1723615614/ojkddwgfoozfmnewwnzo.png" alt="Logo" style="max-width: 200px; background-color: white;">
        </div>

        <!-- Content -->
        <div style="padding: 20px; text-align: start; color:#000 !important;">
            <p>Dear ${userName},</p>
            <p>We are pleased to inform you that an administrative account has been successfully created for you on PersonaPro.ai. As an PP Admin, you now have the ability to manage and oversee various aspects of the platform, ensuring smooth operations and supporting our team effectively.</p>
            <p><strong>Account Details:</strong></p>
            <ul>
                <li><strong>Admin Role:</strong> ${AdminRole}</li>
                <li><strong>Username:</strong> ${userName}</li>
                <li><strong>Password:</strong> ${password}</li>
            </ul>
            <p>To get started, please log in to your new admin account using the credentials provided. If you encounter any issues or require further assistance, our support team is here to help.</p>
            <p><strong>Next Steps:</strong></p>
            <ol>
                <li><strong>Log In:</strong> Visit  ${webUrl}  and enter your credentials to access your admin dashboard.</li>
                <li><strong>Explore Admin Features:</strong> Familiarize yourself with the tools and resources available to you as an Admin.</li>
                <li><strong>Support:</strong> For any questions or technical support, contact us at ${supportEmail}.</li>
            </ol>
            <p>We are excited to have you in this vital role and look forward to your contributions in enhancing our platform.</p>
            <p>Best Regards,<br>PersonaPro.ai</p>
        </div>
    </div>
</body>
`
  },
  passwordResetConfirmation(userName,role,email,date){
    return `
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; color: #ffffff; font-family: Arial, sans-serif; background-color: #ffffff;">
    <div style="width: 100%; max-width: 600px; margin: 0 auto;">
        <!-- Header -->
        <div style="text-align: center; padding: 20px;">
            <img src="https://res.cloudinary.com/dtnhbdmpd/image/upload/v1723615614/ojkddwgfoozfmnewwnzo.png" alt="Logo" style="max-width: 200px; background-color: white;">
        </div>

        <!-- Content -->
        <div style="padding: 20px; text-align: start; color:#000 !important;">
            <p>Dear ${userName},</p>
            <p>This email is to confirm that the password for your PersonaPro.ai admin account has been successfully reset.</p>
            <p><strong>Account Details:</strong></p>
            <ul>
                <li><strong>Admin Role:</strong> ${role}</li>
                <li><strong>Email Address:</strong> ${email}</li>
                <li><strong>Password Reset Date:</strong> ${date}</li>
            </ul>
            <p>If you did not request this password reset or believe this was done in error, please contact our support team immediately at ${supportEmail} or ${number}.</p>
            <p><strong>Next Steps:</strong></p>
            <ol>
                <li><strong>Log In:</strong> Use your new password to log in at ${webUrl}.</li>
                <li><strong>Secure Your Account:</strong> We recommend updating your security questions and enabling any additional security measures available to you.</li>
                <li><strong>Contact Support:</strong> If you encounter any issues, our support team is here to assist you.</li>
            </ol>
            <p>Thank you for your prompt attention to this matter. Ensuring the security of your account is our top priority.</p>
            <p>Best Regards,<br>PersonaPro.ai</p>
        </div>
    </div>
</body>


`
  },
  userAdded(userName,password,PackageName,ContractStartDate,ContractEndDate,ContractTerms,CustomerType,ContractedUsers,MediaCredit,ActiveMediaCredits){
    return `
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; color: #ffffff; font-family: Arial, sans-serif; background-color: #ffffff;">
    <div style="width: 100%; max-width: 600px; margin: 0 auto;">
        <!-- Header -->
        <div style="text-align: center; padding: 20px;">
            <img src="https://res.cloudinary.com/dtnhbdmpd/image/upload/v1723615614/ojkddwgfoozfmnewwnzo.png" alt="Logo" style="max-width: 200px; background-color: white;">
        </div>

        <!-- Content -->
        <div style="padding: 20px; text-align: start; color:#000 !important;">
            <p>Dear ${userName},</p>
            <p>We are pleased to inform you that you have been added as a user to ${userName} on the PersonaPro.ai platform by your Company Admin.</p>
            <p><strong>Account Details:</strong></p>
            <ul>
                <li><strong>Account Name:</strong> ${userName}</li>
                <li><strong>Role:</strong> ${userName}</li>
                <li><strong>Email Address:</strong> ${userName}</li>
                <li><strong>Activation Date:</strong> ${userName}</li>
            </ul>
            <p>To get started, please log in to your account using the credentials provided. If you need any assistance or have any questions, our support team is here to help.</p>
            <p><strong>Next Steps:</strong></p>
            <ol>
                <li><strong>Log In:</strong> Visit ${userName} and enter your credentials to access your account.</li>
                <li><strong>Explore Features:</strong> Familiarize yourself with the tools and resources available to you within the platform.</li>
                <li><strong>Contact Support:</strong> For any questions or technical support, reach out to us at ${supportEmail}.</li>
            </ol>
            <p>We are excited to have you join ${userName} on PersonaPro.ai and look forward to supporting your success.</p>
            <p>Best Regards,<br>PersonaPro.ai</p>
        </div>
    </div>
</body>
`
  },
  mailCreateUser(userName,email,password,date){
    return `
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; color: #ffffff; font-family: Arial, sans-serif;">
    <div style="width: 100%; max-width: 600px; margin: 0 auto;">
        <!-- Header -->
        <div style="text-align: center; padding: 20px;">
            <img src="https://res.cloudinary.com/dtnhbdmpd/image/upload/v1723615614/ojkddwgfoozfmnewwnzo.png" alt="Logo" style="max-width: 200px; background-color: white;">
        </div>

        <!-- Content -->
        <div style="padding: 20px; text-align: start; color:#000 !important; background-color: #ffffff;">
            <p>Dear ${userName},</p>
            <p>We are pleased to inform you that you have been added as a user on the PersonaPro.ai platform by your Company Admin.</p>
            <p><strong>Account Details:</strong></p>
            <ul>
                <li><strong>Account Name:</strong> ${userName}</li>
                <li><strong>Role:</strong> USER</li>
                <li><strong>Email Address:</strong> ${email}</li>
                <li><strong>Activation Date:</strong> ${date}</li>
                <li><strong>Password:</strong> ${password}</li>
            </ul>
            <p>To get started, please log in to your account using the credentials provided. If you need any assistance or have any questions, our support team is here to help.</p>
            <p><strong>Next Steps:</strong></p>
            <ol>
                <li><strong>Log In:</strong> Visit ${webUrl} and enter your credentials to access your account.</li>
                <li><strong>Explore Features:</strong> Familiarize yourself with the tools and resources available to you within the platform.</li>
                <li><strong>Contact Support:</strong> For any questions or technical support, reach out to us at ${supportEmail}.</li>
            </ol>
            <p>We are excited to have you join on PersonaPro.ai and look forward to supporting your success.</p>
            <p>Best Regards,<br>PersonaPro.ai</p>
        </div>
    </div>
</body>
`
  },
  projectAssign(userName,templateName,date,sheetName){
    return `
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; color: #ffffff; font-family: Arial, sans-serif; background-color: #ffffff;">
    <div style="width: 100%; max-width: 600px; margin: 0 auto;">
        <!-- Header -->
        <div style="text-align: center; padding: 20px;">
            <img src="https://res.cloudinary.com/dtnhbdmpd/image/upload/v1723615614/ojkddwgfoozfmnewwnzo.png" alt="Logo" style="max-width: 200px; background-color: white;">
        </div>

        <!-- Content -->
        <div style="padding: 20px; text-align: start; color:#000 !important;">
            <p>Dear ${userName},</p>
            <p>We are pleased to inform you that you have been assigned to a new project on PersonaPro.ai. The project and associated sheets have been created by your Company Admin and are now available for your review and action.</p>
            <p><strong>Project Details:</strong></p>
            <ul>
                <li><strong>Template Name:</strong> ${templateName}</li>
                <li><strong>Assigned Date:</strong> ${date}</li>
                <li><strong>Sheet Name:</strong> ${sheetName}</li>
                
            </ul>
            <p>Please log in to your account to review the project and start working on your assigned sheets.</p>
            <p><strong>Next Steps:</strong></p>
            <ol>
                <li><strong>Log In:</strong> Visit ${webUrl} and enter your credentials to access the project.</li>
                <li><strong>Review Assignments:</strong> Review the assigned sheets and begin your tasks as necessary.</li>
                <li><strong>Contact Support:</strong> If you have any questions or need assistance, please contact us at ${supportEmail} or ${number}.</li>
            </ol>
            <p>We appreciate your attention to these assignments and look forward to your contributions to the project.</p>
            <p>Best Regards,<br>PersonaPro.ai</p>
        </div>
    </div>
</body>

`
  },
  deleteCompanyUser(userName,deletionDate){
    return `<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; color: #ffffff; font-family: Arial, sans-serif; background-color: #ffffff;">
    <div style="width: 100%; max-width: 600px; margin: 0 auto;">
        <!-- Header -->
        <div style="text-align: center; padding: 20px;">
            <img src="https://res.cloudinary.com/dtnhbdmpd/image/upload/v1723615614/ojkddwgfoozfmnewwnzo.png" alt="Logo" style="max-width: 200px; background-color: white;">
        </div>

        <!-- Content -->
        <div style="padding: 20px; text-align: start; color:#000 !important;">
            <p>Dear ${userName},</p>
            <p>We are writing to inform you that your account on PersonaPro.ai has been permanently deleted. This action was taken by our administrative team and is effective as of the date mentioned below.</p>
            <p><strong>Details of the Deletion:</strong></p>
            <ul>
                <li><strong>Deleted By:</strong> Administrative Team</li>
                <li><strong>Date of Deletion:</strong> ${deletionDate}</li>
            </ul>
            <p>As a result, you will no longer have access to your account or any data associated with it. Please note that this decision is final, and the data has been removed in accordance with our privacy policies.</p>
            <p>If you believe this action was taken in error or have any questions regarding this process, please feel free to contact our support team at ${supportEmail}.</p>
            <p>Thank you for your time on PersonaPro.ai, and we wish you the best in your future endeavors.</p>
            <p>Best Regards,<br>PersonaPro.ai</p>
        </div>
    </div>
</body>
`
  },
  otpForVarification(userName,verificationCode){
    return `
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; color: #ffffff; font-family: Arial, sans-serif; background-color: #ffffff;">
    <div style="width: 100%; max-width: 600px; margin: 0 auto;">
        <!-- Header -->
        <div style="text-align: center; padding: 20px;">
            <img src="https://res.cloudinary.com/dtnhbdmpd/image/upload/v1723615614/ojkddwgfoozfmnewwnzo.png" alt="Logo" style="max-width: 200px; background-color: white;">
        </div>

        <!-- Content -->
        <div style="padding: 20px; text-align: start; color:#000 !important; ">
            <p>Dear ${userName},</p>
            <p>To proceed with your password reset request, please enter the following 4-digit code in the provided field on our website.</p>
            <p><strong>Your Verification Code:</strong> ${verificationCode}</p>
            <p>This code is valid for a limited time and can only be used for this request. If you did not request a password reset, please contact our support team immediately.</p>
            <p><strong>Next Steps:</strong></p>
            <ol>
                <li><strong>Enter the Code:</strong> Use the code above to complete your password reset on the Enter OTP screen.</li>
                <li><strong>Secure Your Account:</strong> After resetting your password, consider updating your security settings to further protect your account.</li>
                <li><strong>Contact Support:</strong> If you need any assistance, reach out to us at ${supportEmail}.</li>
            </ol>
            <p>Your security is our priority, and we appreciate your prompt attention to this matter.</p>
            <p>Best Regards,<br>PersonaPro.ai</p>
        </div>
    </div>
</body>


`
  },

};
