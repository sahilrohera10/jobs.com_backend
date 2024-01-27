const express = require("express");
const {
  createjob,
  companyList,
  userList,
  deleteJob,
  editJob,
  getAllJobs,
} = require("../controllers/adminCntlr");
const adminRoute = express.Router();

adminRoute.post("/post-job-admin", createjob);
adminRoute.get("get-all-companies", companyList);
adminRoute.get("user-list", userList);
adminRoute.delete("delete-job/:jobId", deleteJob);
adminRoute.put("edit-job/:jobId", editJob);
adminRoute.get("get-all-jobs-admin", getAllJobs);

module.exports = adminRoute;
