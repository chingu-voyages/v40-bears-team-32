import { logger } from "../config/index.js";
import timeout from "connect-timeout";

// https://medium.com/dataseries/add-timeout-capability-to-express-apps-with-connect-timeout-fce06d76e07a
const timeoutRequest = () => timeout(10000); // 10 seconds

// https://scoutapm.com/blog/express-error-handling
const errorLogger = (error, req, res, next) => {
  logger.error(`${error}`);
  next(error);
};

// eslint-disable-next-line
const errorHandler = (error, req, res, next) => {
  // Error thrown by connect-timeout if request takes longer than 10 seconds
  if (error.name === "ServiceUnavailableError")
    return res
      .status(408)
      .json({ error: error.name, cause: "Request timed out" });
  else if (error.name === "APIError")
    return res
      .status(error.status)
      .json({ cause: error.cause, error: error.name });

  logger.error(`${error}`);
  res.status(503).json({ message: "Server Error", error: error.message });
};

export { timeoutRequest, errorLogger, errorHandler };
