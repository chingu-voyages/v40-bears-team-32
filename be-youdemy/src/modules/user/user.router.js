import express from "express";
import UserController from "./user.controller.js";
import protect from "../auth/auth.middleware.js";

const router = express.Router();

router.get("/:id", protect, UserController.getById);
router.get("/instructors", UserController.getAllInstructors);

export default router;
