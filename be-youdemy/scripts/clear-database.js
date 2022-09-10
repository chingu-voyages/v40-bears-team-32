import { connectDB, disconnectDB } from "../src/config/db.js";

import User from "../src/models/userSchema.js";
import Comment from "../src/models/commentSchema.js";
import Course from "../src/models/courseSchema.js";
import Video from "../src/models/videoSchema.js";

const clearDB = async () => {
  await connectDB();

  await User.deleteMany({}), await Comment.deleteMany({});
  await Course.deleteMany({});
  await Video.deleteMany({});

  // Promise.all([
  // User.deleteMany({}),
  // Comment.deleteMany({}),
  // Course.deleteMany({}),
  // Video.deleteMany({}),
  // ])

  await disconnectDB();
};

clearDB();
