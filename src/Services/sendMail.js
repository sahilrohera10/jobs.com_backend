const nodemailer = require('nodemailer');
const otpGenerator = require('otp-generator');

const sendMail = async (email,sub,text) => {

  try {
    
    console.log(email,sub,text,process.env.NODEMAILER_KEY);
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: "smtp.gmail.com",
      auth: {
        user: 'jobshuts05@gmail.com', 
        pass: "hmyvbpdzeoigducg", 
      },
    });
  
    // Email content
    const mailOptions = {
      from: 'contact.technomaits@gmail.com', // Replace with your Gmail email
      to: email,
      subject: sub,
      text: text,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        // res.send("error");
      } else {
        console.log("send");
      //  res.send("success");
      }
    });
  } catch (error) {
    console.log("error : ", error);
    // return res.status(400).json({ message: error });
  }


  // try {
  //   await transporter.sendMail(mailOptions);
  //   console.log('OTP email sent successfully.');
  // } catch (error) {
  //   console.error('Error sending OTP email:', error);
  //   throw error;
  // }
};

module.exports = { sendMail };
