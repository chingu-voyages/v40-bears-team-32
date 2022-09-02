import morgan from "morgan";
import { logger } from "../config/index.js";

// src: https://lioncoding.com/logging-in-express-js-using-winston-and-morgan/
const format =
  ":remote-addr :method :url :status :res[content-length] - :response-time ms";

const stream = {
  write: (event) => logger.http(event),
};

const skip = () => process.env.NODE_ENV != "dev";

const httpMiddleware = morgan(format, { stream, skip });

// output
// http - ::1 GET /test 200 2 - 1.991 ms
export default httpMiddleware;
