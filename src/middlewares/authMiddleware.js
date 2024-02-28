const expressAsyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Company = require("../models/companyModel");

const auth = expressAsyncHandler(async (req, res, next) => {
  //   const {id} = req?.params;
  const id = "1234";
  const role = "company";

  if (role === "company") {
    const company = await Company.findById(id);
    if (company == null) {
      throw new Error("Not Authenticated.");
    } else next();
  } else if (role === "user") {
    const user = await User.findById(id);
    if (user == null) {
      throw new Error("Not Authenticated.");
    } else next();
  } else {
    next();
  }
});

module.exports = auth;
