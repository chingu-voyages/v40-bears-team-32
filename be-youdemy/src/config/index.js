const consoleLogger = require('./logger/console')
const fileLogger = require('./logger/file')

const logger = process.env.NODE_ENV == "dev" ? consoleLogger: fileLogger

module.exports = {
    logger,
}