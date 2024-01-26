const userCtlr = require('../controllers/userCntlr');
const express = require("express");
const user = express.Router();
user.post('/Register',userCtlr.Register);
user.post('/Login',userCtlr.Login);
module.exports = user;

