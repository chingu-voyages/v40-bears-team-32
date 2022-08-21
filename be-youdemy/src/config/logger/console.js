import { format as _format, transports as _transports } from "winston";
import { levels } from "./settings.js";

const format = _format.combine(
  _format.colorize(),
  _format.splat(), // allows you to use string interpolation + print objects
  _format.printf((event) => `${event.level} - ${event.message}`)
);

const transports = [
  new _transports.Console({ handleExceptions: true, handleRejections: true }),
];

const maxLevel = Object.keys(levels).slice(-1)[0];

const configs = {
  level: maxLevel,
  levels,
  format,
  transports,
};

/**
 * Example:
 *
 * logger.info("Hello %s", person.name)
 * logger.error("this is an error")
 * logger.debug("its a debug")
 *
 * info - Hello Bob
 * error - this is an error
 * debug - its a debug
 */

export default configs;
