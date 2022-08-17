import express from "express";
import path from "path";

import connectDB from "./config/db.js";
import { logger } from "./config/index.js";
import morgan from "./middleware/morgan.js";

const app = express();
connectDB();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use(morgan);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => logger.info(`Server started on port ${PORT}`));
