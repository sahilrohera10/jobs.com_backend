const user_model = require("../models/userModel");
const bcrypt = require("bcrypt");
const { sendMail } = require("../Services/sendMail");

function generateToken() {
  console.log("in generate function");
  const randomNum = Math.random() * 9000;
  return Math.floor(1000 + randomNum);
}

async function Register(req, resp) {
  try {
    const data = await user_model.findOne({ user_email: req.body.user_email });
    if (data) {
      return resp.status(200).json({ msg: "Already registered" });
    }
    const body = {
      user_first_name: req.body.user_first_name,
      user_last_name: req.body.user_last_name,
      user_email: req.body.user_email,
      user_password: req.body.user_password,
    };
    const user = await user_model.create(body);

    return resp.status(200).json({ msg: "successfully registerd", data: user });
  } catch (error) {
    console.error("An error occurred:", error);
    return resp.status(500).json({ error: error });
  }
}

async function Login(req, resp) {
  const body = req.body;
  try {
    const data = await user_model.findOne({ user_email: body.user_email }); 
    if (data) {
      if (await data.isPasswordCorrect(body.user_password)) {
        return resp.status(200).json({ msg: "successfully Login", data: data });
      } else {
        return resp.status(300).json({ msg: "Incorrect password" });
      }
    } else {
      return resp.status(404).json({ msg: "No user found" });
    }
  } catch (error) {
    return resp.status(500).json({ error: error });
  }
}
async function sendOtpforgetPassword(req, resp) {
  const body = req.body;
  try {
    const data = await user_model.findOne({ user_email: body.user_email }); 
    if (data) {
      console.log("in function");
      const otp = generateToken();
      const sub = "Here is your OTP";
      const text = `This is your OTP ${otp} for password regeneration.`;
      console.log(text);
     await sendMail(body.user_email, sub, text);
      await user_model.findOneAndUpdate(
        { user_email: body.user_email },
        { user_otp: otp }
      );
    return resp.status(200).json({message:`OTP Sent at email: ${body.user_email}`})

    } else {
      return resp.status(404).json({ msg: "No user found" });
    }
  } catch (error) {
    console.log("error", error);
    return resp.status(500).json({ error: error });
  }
}
async function verifyOtpandUpdatePassword(req, resp) {
  const body = req.body;
  try {
    const data = await user_model.findOne({ user_email: body.user_email }); 
    if (data) {
      if (body.user_otp == data.user_otp) {
        await user_model.findOneAndUpdate(
          { user_email: body.user_email },
          { user_password: body.user_password }
        );
        return resp.status(200).json({ msg: "Password Successfully updated." });
      }
    } else {
      return resp.status(404).json({ msg: "No user found" });
    }
  } catch (error) {
    return resp.status(500).json({ error: error });
  }
}
module.exports = {
  Register,
  Login,
  sendOtpforgetPassword,
  verifyOtpandUpdatePassword,
};
