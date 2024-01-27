const jobAdminModel = require("../models/jobAdminModel");
const companyModel = require("../models/companyModel");
const userModel = require("../models/userModel");

module.exports = {
  createjob,
  companyList,
  userList,
  deleteJob,
  editJob,
  getAllJobs,
};

async function createjob(req, res) {
  const body = req.body;
  try {
    await jobAdminModel.create(body);
    return res.status(200).json({ msg: "Job Posted Successfully" });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}

async function companyList(req, res) {
  try {
    const data = await companyModel.find();
    return res.status(200).json({ data: data });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}

async function userList(req, res) {
  try {
    const data = await userModel.find();
    return res.status(200).json({ data: data });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}

async function deleteJob(req, res) {
  const jobId = req.params.jobId;
  try {
    await jobAdminModel.deleteOne({ _id: jobId });
    return res.status(200).json({ msg: "job deleted Successfully" });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}

async function editJob(req, res) {
  const jobId = req.params.jobId;
  const body = req.body;

  try {
    const data = await jobAdminModel.updateOne({ _id: jobId }, { $set: body });
    return res
      .status(200)
      .json({ msg: "Job Updated successfully", data: data });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}

async function getAllJobs(req, res) {
  try {
    const data = await jobAdminModel.find();
    return res.status(200).json({ data: data });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}
