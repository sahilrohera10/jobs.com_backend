const mongoose = require("mongoose");

const jobAdminModelSchema = mongoose.Schema(
  {
    apply_link: {
      type: String,
      required: true,
    },
    job_role: {
      type: String,
      required: true,
    },
    company_name: {
      type: String,
      trim: true,
      required: true,
    },
    job_description: {
      type: String,
      trim: true,
      required: true,
    },
    job_location: {
      type: String,
      trim: true,
      enum: ["Onsite", "Remote", "Hybrid"],
      required: true,
    },
    job_type: {
      type: String,
      trim: true,
      enum: ["Internship", "Full Time", "Part Time"],
      required: true,
    },
    batch_eligible: {
      type: String,
      trim: true,
      required: true,
    },
    post_date: {
      type: Date,
      trim: true,
      required: true,
    },
    last_date: {
      type: Date,
      trim: true,
    },
  },
  { timestamps: true }
);

const jobAdminModel = mongoose.model(
  "jobAdminModel",
  jobAdminModelSchema
);
module.exports = jobAdminModel;
