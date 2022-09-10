import mongoose from "mongoose";
import { modelFactory } from "../../config/db.js";

const userSchema = {
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
  isInstructor: {
    type: Boolean,
    required: true,
  },
  bio: {
    type: String,
    default: "",
  },
  tagline: {
    type: String,
    default: "",
  },
  skills: {
    type: [String],
  },
  profilePic: {
    type: String,
    default: "",
  },
  enrolledCourses: {
    type: [mongoose.Schema.Types.ObjectId],
  },
  createdCourses: {
    type: [mongoose.Schema.Types.ObjectId],
  },
};

const UserModel = modelFactory("User", userSchema);

export default UserModel;
