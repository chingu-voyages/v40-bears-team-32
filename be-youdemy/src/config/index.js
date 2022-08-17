import dotenv from "dotenv";
dotenv.config();

import consoleLogger from "./logger/console.js";
import fileLogger from "./logger/file.js";

const logger = process.env.NODE_ENV == "dev" ? consoleLogger : fileLogger;

export { logger };
