import express from "express";
import {
  getAllCourses,
  newCourse,
  getCoursesByInstructorId,
} from "../../controllers/coursesControllers.js";

const router = express.Router();

router.route("/").post(newCourse).get(getAllCourses);
router.route("/:id").get(getCoursesByInstructorId);

export default router;
