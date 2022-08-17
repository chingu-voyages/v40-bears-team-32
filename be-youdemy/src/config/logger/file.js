const winston = require('winston')
const {levels, timestampFormat, logsDir, logFileLimit} = require('./settings')
require('winston-daily-rotate-file')

const format = winston.format.combine(
    winston.format.timestamp(timestampFormat),
    winston.format.splat(),
    winston.format.printf(event => `[${event.timestamp}] (${event.level.toUpperCase()}): ${event.message}`)
)

const transports = [new winston.transports.DailyRotateFile({
    dirname: logsDir,
    filename: 'err-%DATE%-.log',
    datePattern: 'YYYY-MM-DD-HH',
    maxsize: logFileLimit,
    maxFiles: 5,
    handleExceptions:true,
    handleRejections: true
})]

const configs = {
    level: 'error',
    levels,
    format,
    transports
}

/**
 * logger.info("Hello %s", obj.name)
 * logger.error("this is an error")
 * logger.debug("its a debug")
 * 
 * OUTPUT:
 * [2022-08-16 at 18:26:57] (ERROR): this is an error
 */

module.exports = winston.createLogger(configs)