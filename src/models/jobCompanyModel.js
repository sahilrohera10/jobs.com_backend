const mongoose = require("mongoose");

const jobCompanyModelSchema = mongoose.Schema(
  {
    company_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "companyModel",
    },
    job_role: {
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
      required: true,
    },
  },
  { timestamps: true }
);

const jobCompanyModel = mongoose.model(
  "jobCompanyModel",
  jobCompanyModelSchema
);
module.exports = jobCompanyModel;
