const mongoose = require("mongoose");

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
  },
  { timestamps: true }
);

// userModelSchema.pre("save", async function (next) {
//   if (!this.isModified("user_password")) return next();

//   this.user_password = await bcrypt.hash(this.user_password, 10);
//   return next();
// });

// userModelSchema.methods.isPasswordCorrect = async function (password) {
//   return await bcrypt.compare(password, this.user_password);
// };


// userModelSchema.pre('save', async function (next) {
//   if (!this.isModified('user_password')) return next();

//   try {
//     this.user_password = await bcrypt.hash(this.user_password, 10);
//     return next();
//   } catch (error) {
//     return next(error);
//   }
// });

// userModelSchema.methods.isPasswordCorrect = async function (password) {
//   try {
//     return await bcrypt.compare(password, this.user_password);
//   } catch (error) {
//     throw error; // Handle or log the error as needed
//   }
// };

const userModel = mongoose.model("userModel", userModelSchema);
module.exports = userModel;
