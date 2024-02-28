const mongoose = require("mongoose")
const bcrypt = require("bcrypt");
const adminModelSchema = mongoose.Schema(
  {
    admin_first_name: {
      type: String,
      required: true,
      trim: true,
    },
    admin_last_name: {
      type: String,
      trim: true,
      required: true,
    },
    admin_email: {
      type: String,
      trim: true,
      required: [true, "email is required"],
      lowercase: true,
      unique: true,
    },
    admin_password: {
      type: String,
      required: true,
    },
    
  },
  { timestamps: true }
);

adminModelSchema.pre("save", async function (next) {
  if (!this.isModified("admin_password")) return next();

  this.admin_password = await bcrypt.hash(this.admin_password, 10);
  return next();
});

adminModelSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.admin_password);
};

const adminModel = mongoose.model("adminModel", adminModelSchema);
module.exports = adminModel;
