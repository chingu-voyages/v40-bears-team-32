import {
  format as _format,
  transports as _transports,
  createLogger,
} from "winston";
import { levels, timestampFormat, logsDir, logFileLimit } from "./settings";
import "winston-daily-rotate-file";

const format = _format.combine(
  _format.timestamp(timestampFormat),
  _format.splat(),
  _format.printf(
    (event) =>
      `[${event.timestamp}] (${event.level.toUpperCase()}): ${event.message}`
  )
);

const transports = [
  new _transports.DailyRotateFile({
    dirname: logsDir,
    filename: "err-%DATE%-.log",
    datePattern: "YYYY-MM-DD-HH",
    maxsize: logFileLimit,
    maxFiles: 5,
    handleExceptions: true,
    handleRejections: true,
  }),
];

const configs = {
  level: "error",
  levels,
  format,
  transports,
};

/**
 * logger.info("Hello %s", obj.name)
 * logger.error("this is an error")
 * logger.debug("its a debug")
 *
 * OUTPUT:
 * [2022-08-16 at 18:26:57] (ERROR): this is an error
 */

export default createLogger(configs);
