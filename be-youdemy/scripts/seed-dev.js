import { logger } from "../src/config/index";
import { connectDB, disconnectDB } from "../src/config/db.js";
import User from "../src/models/userSchema.js";
import UserService from "../src/services/userService.js";
import Video from "../src/models/videoSchema.js";
import VideoService from "../src/services/videoService.js";

// src: https://javascript.plainenglish.io/seeding-mongodb-database-from-node-the-simplest-way-3d6a0c1c4668

const users = [
  {
    firstName: "Andrei",
    lastName: "Neagoie",
    email: "andrei@email.com",
    password: 123,
    isInstructor: true,
  },
  {
    firstName: "John",
    lastName: "Smith",
    email: "john@email.com",
    password: 123,
    isInstructor: false,
  },
];

const videoDTOs = [
  {
    title:
      "How to Create a GitHub Profile READ ME | GitHub Tutorial | Zero To Mastery",
    thumbnail: "N/A",
    description:
      "If you want to get hired as a software engineer, you have to optimize every opportunity in front of you! GitHub is an easy way to stand out from the rest, and give yourself the best odds to land a job.",
    url: "https://www.youtube.com/watch?v=ktN5tDfQ_g8",
    comments: [],
    userId: "",
    name: "Andrei",
  },
  {
    title:
      "What is Cybersecurity? | Cybersecurity in 2 Minutes | Zero To Mastery",
    thumbnail: "N/A",
    description:
      "What is Cybersecurity? Why is it important? How can you get started? Lucky for you, we'll get you up to speed in under 2 minutes.",
    url: "https://www.youtube.com/watch?v=tOtzHZiwiRE",
    comments: [],
    userId: "",
    name: "Andrei",
  },
];

const seedUsers = async () => {
  await User.deleteMany({});
  return User.insertMany(users);
};

const deleteUsers = async () => await User.deleteMany({});

const mapUsersToVideos = (users) => {
  const instructors = users.filter((u) => u.isInstructor);

  return videoDTOs.map((v) => {
    v.userId = instructors.find((i) => i.firstName === v.name)._id;
    return v;
  });
};

const seedVideos = async (videos) => {
  await Video.deleteMany({});
  await Video.insertMany(videos);
};

const deleteVideos = async () => await Video.deleteMany({});

const displayDatabase = async () => {
  const res = await UserService.getAll();
  const res2 = await VideoService.getAll();

  logger.info("Users:\n", res.toString());
  logger.info("Videos:\n", res2.toString());
};

const seed = async () => {
  await connectDB();
  await deleteUsers();
  const userDocs = await seedUsers();
  const videos = mapUsersToVideos(userDocs);
  await deleteVideos();
  await seedVideos(videos);
  await displayDatabase();
  await disconnectDB();
};

seed();
