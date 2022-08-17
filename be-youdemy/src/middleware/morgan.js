const morgan = require("morgan")
const {logger} = require("../config") 

// src: https://lioncoding.com/logging-in-express-js-using-winston-and-morgan/

const stream = {
    write: event => logger.http(event)
}

const skip = () => process.env.NODE_ENV != "dev"

module.exports = morgan({stream, skip})