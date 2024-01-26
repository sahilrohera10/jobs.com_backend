const mongoose = require("mongoose");

const applicationModelSchema = mongoose.Schema(
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
    status:{
        type:String,
        default:"Pending",
        enum:["Pending","Rejected","Accepted","Ready for Interview","Hired"],
    },
    user_name:{
        type:String,
        trim:true,
        required:true,
    },
    user_email:{
        type:String,
        trim:true,
        required:true,
    },
    user_resume:{
        type:String,
        trim:true,
        required:true,
    },
    user_linkedIn:{
        type:String,
        trim:true,
        required:true,
    },
    user_github:{
        type:String,
        trim:true,
        required:true,
    },
    user_other:{
        type:String,
        trim:true,
    },
    user_gender:{
        type:String,
        required:true,
        enum:["Male","Female","Prefer not to say"],
    },
    user_location:{
        type:String,
        trim:true,
        required:true,
    },
    user_cover_letter:{
        type:String,
        trim:true,
    },
  },
  { timestamps: true }
);

const applicationModel = mongoose.model(
  "applicationModel",
  applicationModelSchema
);
module.exports = applicationModel;
