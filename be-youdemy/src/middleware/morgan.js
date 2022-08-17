import morgan from "morgan";
import { logger } from "../config";

// src: https://lioncoding.com/logging-in-express-js-using-winston-and-morgan/

const stream = {
  write: (event) => logger.http(event),
};

const skip = () => process.env.NODE_ENV != "dev";

export default morgan({ stream, skip });
