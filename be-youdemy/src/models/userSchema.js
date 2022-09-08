import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    // Attributes to be used by instructors only
    isInstructor: {
      type: Boolean,
      required: true,
      default: false,
    },
    profileDescription: {
      type: String,
      default: "",
    },
    headline: {
      type: String,
      default: "",
    },
    skills: {
      type: [],
    },
    imageUrl: {
      type: String,
      default: "",
    },
    imageAltText: {
      type: String,
      default: "",
    },
    courses: {
      type: [],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;
