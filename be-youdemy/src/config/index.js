import consoleLogger from "./logger/console";
import fileLogger from "./logger/file";

const logger = process.env.NODE_ENV == "dev" ? consoleLogger : fileLogger;

export default {
  logger,
};
