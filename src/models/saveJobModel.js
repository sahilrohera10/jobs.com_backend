const mongoose = require("mongoose");

const saveJobModelSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "userModel",
    },
    job_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);

const saveJobModel = mongoose.model(
  "saveJobModel",
  saveJobModelSchema
);
module.exports = saveJobModel;
