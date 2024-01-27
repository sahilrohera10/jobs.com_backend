const jobCntlr = require("../controllers/jobCntlr");
const express = require("express");

const jobRouter = express.Router();

jobRouter.post("/NewJobByCompany", jobCntlr.CreateJobByCompany);
jobRouter.delete(
  "/DeleteJobByCompany/:job_ref_id",
  jobCntlr.DeleteJobByCompany
);
jobRouter.get("/GetAllJobsByCompany/:company_id", jobCntlr.GetAllJobsByCompany);
jobRouter.put("/UpdateJobByCompany", jobCntlr.UpdateJobByCompany);

module.exports = jobRouter;
