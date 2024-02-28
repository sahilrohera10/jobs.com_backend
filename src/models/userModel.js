const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userModelSchema = mongoose.Schema(
  {
    user_meta_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    user_first_name: {
      type: String,
      trim: true,
    },
    user_last_name: {
      type: String,
      trim: true,
    },
    user_title: {
      type: String,
      trim: true,
    },
    user_header: {
      type: String,
      trim: true,
    },
    user_skills: [
      {
        type: String,
        trim: true,
      },
    ],
    user_accomplishments: [
      {
        type: String,
        trim: true,
      },
    ],
    user_experience: [
      {
        company_name: {
          type: String,
          trim: true,
        },
        role: {
          type: String,
          trim: true,
        },
        start_date: {
          type: Date,
          trim: true,
        },
        end_date: {
          type: String,
          trim: true,
        },
        location: {
          type: String,
          trim: true,
        },
      },
    ],
    user_education: [
      {
        college: {
          type: String,
          trim: true,
        },
        degree: {
          type: String,
          trim: true,
        },
        start_date: {
          type: Date,
          trim: true,
        },
        end_date: {
          type: String,
          trim: true,
        },
        cgpa: {
          type: String,
          trim: true,
        },
      },
    ],
    user_projects: [
      {
        project_img: {
          type: String,
          trim: true,
        },
        project_title: {
          type: String,
          trim: true,
        },
        project_desc: {
          type: String,
          trim: true,
        },
        github: {
          type: String,
        },
        live_link: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

const userModel = mongoose.model("userModel", userModelSchema);
module.exports = userModel;
