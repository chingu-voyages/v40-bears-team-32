import express from "express";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth/authRoutes.js";
import videoRoutes from "./routes/video/videoRoutes.js";
import commentsRoutes from "./routes/comments/commentsRoutes.js";
import coursesRoutes from "./routes/courses/coursesRoutes.js";

import morgan from "./middleware/morgan.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan);

app.use("/auth", authRoutes);
app.use("/videos", videoRoutes);
app.use("/comments", commentsRoutes);
app.use("/courses", coursesRoutes);

export default app;
