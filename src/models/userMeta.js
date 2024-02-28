const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userMetaSchema = mongoose.Schema(
  {
    user_email: {
      type: String,
      trim: true,
      required: [true, "email is required"],
      lowercase: true,
      unique: true,
    },
    user_password: {
      type: String,
      required: true,
    },
    user_otp: {
      type: Number,
    },
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

const userMeta = mongoose.model("userMeta", userMetaSchema);
module.exports = userMeta;
