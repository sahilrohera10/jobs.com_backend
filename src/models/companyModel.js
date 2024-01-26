const mongoose = require("mongoose");

const campanyModelSchema = mongoose.Schema(
  {
    company_name: {
      type: String,
      required: true,
      trim: true,
    },
    company_email: {
      type: String,
      trim: true,
      required: [true, "email is reuired"],
      lowercase: true,
      unique: true,
    },
    company_password: {
      type: String,
      required: true,
    },
    company_location: {
      type: String,
      trim: true,
      required: true,
    },
    website_link: {
      type: String,
      required: true,
      lowercase: true,
    },
    company_description: {
      type: String,
      required: true,
    },
    company_no_of_people: {
      type: String,
      required: true,
    },
    company_logo_link: {
      type: String,
      required: true,
    },
    company_type: {
      type: String,
      required: true,
      enum: ["Service Based", "Product Based", " Others"],
    },
  },
  { timestamps: true }
);

campanyModelSchema.pre("save", async function (next) {
  if (!this.isModified("campany_password")) return next();

  this.company_password = await bcrypt.hash(this.company_password, 10);
  return next();
});

campanyModelSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.company_password);
};

const campanyModel = mongoose.model("campanyModel", campanyModelSchema);
module.exports = campanyModel;
