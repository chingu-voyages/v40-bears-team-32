import { format as _format, transports as _transports } from "winston";
import { levels, timestampFormat, logsDir, logFileLimit } from "./settings.js";
import "winston-daily-rotate-file";

const format = _format.combine(
  _format.timestamp(timestampFormat),
  _format.splat(),
  _format.printf(
    (event) =>
      `[${event.timestamp}] (${event.level.toUpperCase()}): ${event.message}`
  )
);

const configs = () => {
  // Moved transports here to prevent creation of logs folder if NODE_ENV == 'dev'
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

  return {
    level: "error",
    levels,
    format,
    transports,
  };
};

/**
 * logger.info("Hello %s", obj.name)
 * logger.error("this is an error")
 * logger.debug("its a debug")
 *
 * OUTPUT:
 * [2022-08-16 at 18:26:57] (ERROR): this is an error
 */

export default configs;
