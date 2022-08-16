const winston = require('winston')
const {levels} = require('./configs')

const format = winston.format.combine(
    winston.format.colorize(),
    winston.format.splat(), // allows you to use string interpolation + print objects
    winston.format.printf(event => `${event.level} - ${event.message}`)
)

const transports = [new winston.transports.Console()]

const maxLevel =  Object.keys(levels).slice(-1)[0]

const configs = {
    level: maxLevel,
    levels,
    format,
    transports
}

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

module.exports = winston.createLogger(configs)