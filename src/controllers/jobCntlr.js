const jobCompanyModel = require("../models/jobCompanyModel");
const companyModel = require("../models/companyModel");
module.exports = {
  CreateJobByCompany,
  DeleteJobByCompany,
  GetAllJobsByCompany,
  UpdateJobByCompany
};

async function CreateJobByCompany(req, res) {
  const body = req.body;
  try {
    const { job_ref_id } = body.job_ref_id;
    const isJobAlreadyExist = await jobCompanyModel.findOne({
      job_ref_id: job_ref_id,
    });
    if (isJobAlreadyExist) {
      return res.status(409).json({ message: "Job Already Exist" });
    }
    const newJob = await jobCompanyModel.create(body);
    return res.status(200).json({
      message: `New Job created with Job-Id : ${newJob.job_ref_id}`,
      newJob_Data: newJob,
    });
  } catch (error) {
    console.log("error->", error);
    return res.status(500).json({ error: error });
  }
}

async function DeleteJobByCompany(req, res) {
  const job_ref_id = req.params.job_ref_id;
  try {
    const isJobExist = await jobCompanyModel.findOne({
      job_ref_id: job_ref_id,
    });
    if (!isJobExist) {
      return res
        .status(400)
        .json({ message: `The Job Id - ${job_ref_id} not exist` });
    }
    await jobCompanyModel.findOneAndDelete({ job_ref_id: job_ref_id });
    return res.status(200).json({ message: "Successfully deleted the job." });
  } catch (error) {
    console.log("error->", error);
    return res.status(500).json({ error: error });
  }
}

async function GetAllJobsByCompany(req, res) {
  const company_id = req.params.company_id;
  try {
    const CompanyExist = await companyModel.findOne({ _id: company_id });
    if (!CompanyExist) {
      return res
        .status(400)
        .json({ message: `Company Id - ${company_id} does not exist` });
    }
    const jobs = await jobCompanyModel
      .find({ _id: company_id })
      .sort({ created_at: -1 });
    if (jobs.length == 0) {
      return res.status(200).json({ message: "No Jobs Listed" });
    }
    return res.status(200).json({
      message: "All Jobs by Company",
      jobs: jobs,
    });
  } catch (error) {
    console.log("error->", error);
    return res.status(500).json({ error: error });
  }
}

async function UpdateJobByCompany(req, res) {
  const { job_ref_id } = req.body;
  try {
    const job = await jobCompanyModel.findByIdAndUpdate(
      job_ref_id,
      {
        body,
      },
      { new: true }
    );

    return res
      .status(200)
      .json({ message: `Job details of Id - ${job_ref_id} is updated` , job: job});
  } catch (error) {
    console.log("error->", error);
    return res.status(500).json({ error: error });
  }
}
