const nodemailer = require("nodemailer");
const cryptoRandomString = require('crypto-random-string');

const sendMail = async (email) =>{
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'teamrealme333@gmail.com', 
      pass: '@T3amrealme33', 
    },
  });

  // send mail with defined transport object
  const randomString = cryptoRandomString({ length: 128 });
  let info = await transporter.sendMail({ 
    from: 'BarterIT <no-reply@barterit.com>', 
    to: email, 
    subject: "Account Verification", 
    //text: "", 
    html: `<p>You have to verify your account before logging in to BarterIT</p>
    <p>Click the link to verify</p>
    <a href="http://localhost:3000">https://barterit.com/auth/signup/verify/${randomString}</a>`
  });
  
  return info;
}

module.exports = sendMail;