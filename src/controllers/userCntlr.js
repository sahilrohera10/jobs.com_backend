const user_model = require("../models/userModel");
const bcrypt = require("bcrypt");
async function Register(req, resp) {
  try {
    const data = await user_model.findOne({ user_email: req.body.user_email });
    if (data) {
      return resp.status(400).json({ msg: "already registerd" });
    }
    const salt = await bcrypt.genSalt(10);
    const Secpassword = await bcrypt.hash(req.body.user_password, salt);
    const body = {
      user_first_name: req.body.user_first_name,
      user_last_name: req.body.user_last_name,
      user_email: req.body.user_email,
      user_password: Secpassword,
    };
    await user_model.create(body);
    return resp.status(200).json({ msg: "successfully registerd" });
  } catch (error) {
    console.error("An error occurred:", error);
    return resp.status(500).json({ error: error });
  }
}

async function Login(req, resp) {
  const body = req.body;
  try {
    const data = await user_model.findOne({ user_email: body.user_email }); //fetch data
    if (data) {
      if (await bcrypt.compare(body.user_password, data.user_password)) {
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
module.exports = {
  Register,
  Login,
};
