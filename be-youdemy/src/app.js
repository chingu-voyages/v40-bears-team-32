import express from "express";
import cookieParser from "cookie-parser";
import "express-async-errors";

// import authRoutes from "./routes/auth/authRoutes.js";
// import videoRoutes from "./routes/video/videoRoutes.js";
// import commentsRoutes from "./routes/comments/commentsRoutes.js";
// import coursesRoutes from "./routes/courses/coursesRoutes.js";

import {
  timeoutRequest,
  errorLogger,
  errorHandler,
} from "./middleware/error.js";
import morgan from "./middleware/morgan.js";

import AuthRouter from "./modules/auth/auth.router.js";
import UserRouter from "./modules/user/user.router.js";

const app = express();

app.use(timeoutRequest());
app.use(express.json());
app.use(cookieParser());
app.use(morgan);

// app.use("/auth", authRoutes);
// app.use("/videos", videoRoutes);
// app.use("/comments", commentsRoutes);
// app.use("/courses", coursesRoutes);

// https://hyperping.io/blog/how-to-add-a-nodejs-health-check-endpoint-using-express
app.get("/api/health", (req, res) => {
  // TODO: display process.uptime() in minutes, hours, days, weeks, etc as appropriate

  const data = {
    uptime: `${process.uptime().toFixed(2)} seconds`,
    message: "Ok",
    date: new Date().toLocaleString(),
  };

  res.status(200).json(data);
});

app.use("/api/auth/", AuthRouter);
app.use("/api/users/", UserRouter);

app.use(errorLogger);
app.use(errorHandler);

export default app;
