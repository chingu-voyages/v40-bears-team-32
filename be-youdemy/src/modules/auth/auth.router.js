import express from "express";
import AuthController from "./auth.controller.js";

const router = express.Router();

// src: use post for auth -> https://stackoverflow.com/questions/3521290
router.post("/signup", AuthController.signup);
router.post("/login", AuthController.login);
router.post("/logout", AuthController.logout);

export default router;
