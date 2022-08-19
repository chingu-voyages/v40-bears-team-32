import { createLogger } from "winston";
import dotenv from "dotenv";
dotenv.config();

import console from "./logger/console.js";
import file from "./logger/file.js";

const logger =
  process.env.NODE_ENV == "dev" ? createLogger(console) : createLogger(file());

export { logger };
