import http from "http";

import app from "./app.js";
import { logger } from "./config/index.js";
import {connectDB} from "./config/db.js";

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

const startServer = async () => {
  await connectDB();
  server.listen(PORT, () => {
    logger.info(`Server started on port ${PORT}`);
  });
};

startServer();
