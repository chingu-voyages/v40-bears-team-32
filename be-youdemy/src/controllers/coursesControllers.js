import Course from "../models/courseSchema.js";
import { logger } from "../config/index.js";

// Get all courses
export const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.send(courses);
  } catch (error) {
    logger.info(error);
    res.status(404).send("No available courses");
  }
};

// Get courses by ID
export const getCoursesByInstructorId = async (req, res) => {
  try {
    const { instructorId } = req.params.id;
    const courses = await Course.find({ instructorId });
    res.send(courses);
  } catch (error) {
    logger.info(error);
    res.status(404).send("No available courses");
  }
};

// Post new course
export const newCourse = async (req, res) => {
  try {
    const { name, prerequisites, description, level, price, userId } = req.body;
    const newCourse = await Course.create({
      name,
      prerequisites,
      description,
      level,
      price,
      userId,
    });

    res.status(200).send(newCourse);
  } catch (error) {
    logger.info(error);
    res.status(400).send("Course post failed: Double check your inputs");
  }
};
