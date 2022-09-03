import express from "express";
import { registerUser, loginUser } from "../../controllers/auth/auth.js";

const router = express.Router();

router.route("/login").post(loginUser);
router.route("/signup").post(registerUser);
router.route("/logout").delete(loginUser);

export default router;
