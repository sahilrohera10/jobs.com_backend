const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userModelSchema = mongoose.Schema(
  {
    user_first_name: {
      type: String,
      required: true,
      trim: true,
    },
    user_last_name: {
      type: String,
      trim: true,
      required: true,
    },
    user_title:{
      type: String,
      trim: true,
      required: true,
    },
    user_header:{
      type: String,
      trim: true,
      required: true,
    },
    user_skills:[
      {
        type: String,
        trim: true,
        // required: true,
      }
    ],
    user_accomplishments:[
      {
        type: String,
        trim: true,
        // required: true,
      }
    ],
    user_experience:[
      {
        company_name :{
          type: String,
          trim: true,
        },
        role:{
          type: String,
          trim : true,
        },
        start_date:{
          type: Date,
          trim: true,
        },
        end_date:{
          type: String,
          trim: true,
        },
        location:{
          type: String,
          trim: true,
        }


      }
      
    ],
    user_education:[
      {
        college:{
          type: String,
          trim: true,
        },
        degree:{
          type: String,
          trim: true,
        },
        start_date:{
          type: Date,
          trim: true,
        },
        end_date:{
          type: String,
          trim: true,
        },
        cgpa:{
          type: String,
          trim: true,
        }
      }
    ],
    user_projects:[
      {
        project_img:{
          type:String,
          trim:true,
        },
        project_title:{
          type: String,
          trim: true,
        },
        project_desc:{
          type :String,
          trim:true,
        },
        github:{
          type: String,

        },
        live_link:{
          type:String,
        }
      }
    ]
  },
  { timestamps: true }
);

userModelSchema.pre("save", async function (next) {
  if (!this.isModified("user_password")) return next();

  this.user_password = await bcrypt.hash(this.user_password, 10);
  return next();
});

userModelSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.user_password);
};

const userModel = mongoose.model("userModel", userModelSchema);
module.exports = userModel;
