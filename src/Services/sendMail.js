const nodemailer = require('nodemailer');
const otpGenerator = require('otp-generator');

const sendMail = async (email,sub,text) => {
  console.log(email,sub,text,process.env.NODEMAILER_KEY);
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    auth: {
      user: 'jobshut05@gmail.com', // Replace with your Gmail email
      pass: "hmyvbpdzeoigducg", // Replace with your Gmail password or an App Password
    },
  });

  // Email content
  const mailOptions = {
    from: 'jobshut05@gmail.com', // Replace with your Gmail email
    to: email,
    subject: sub,
    text: text,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('OTP email sent successfully.');
  } catch (error) {
    console.error('Error sending OTP email:', error);
    throw error;
  }
};

module.exports = { sendMail };
