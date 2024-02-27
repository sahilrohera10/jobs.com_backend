const userCtlr = require('../controllers/userCntlr');
const express = require("express");
const user = express.Router();

user.post('/Register',userCtlr.Register);
user.post('/Login',userCtlr.Login);
user.post('/forgotPassword',userCtlr.sendOtpforgetPassword);
user.put('/verifyotp',userCtlr.verifyOtpandUpdatePassword);
user.get('/getProfileById/:userId', userCtlr.getProfileDetails);
user.get('/getAppliedJobsById/:userId', userCtlr.getAllAppliedJobs);
user.post('/saveJobPost', userCtlr.saveJobPost);
user.post('/applyToJob', userCtlr.applyToJob);
user.get('/getSavedJobsById/:userId', userCtlr.getAllSavedJobs);
user.put('/editProfileById/:userId', userCtlr.editProfile);

module.exports = user;

