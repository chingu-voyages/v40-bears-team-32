import express from "express";
import dotenv from "dotenv";
import path from "path";

import connectDB from "./config/db.js";
import { logger } from "./config";

dotenv.config();
const app = express();
connectDB();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => logger.info(`Server started on port ${PORT}`));
