const winston = require('winston')
const configs = require('../configs')
const path = require('path')

// Winston default log levels
// src: https://github.com/winstonjs/winston#logging-levels
const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6
}

// src: https://github.com/winstonjs/winston#filtering-info-objects
// this method is used to configure logger to only capture log events of the parameter logLevel
// Ex: restrictLogEventsTo(error)
const restrictLogEventsTo = logLevel => {
    return winston.format(logEvent => logEvent.level !== logLevel ? false: logEvent)
}

// src: https://github.com/winstonjs/logform#timestamp
// src: https://github.com/taylorhakes/fecha
const timestampFormat = {
    format: 'YYYY-MM-DD [at] HH:mm:ss'
}

const logsDir = path.join(configs.BACKEND_ROOT, 'logs')

// src: https://stackoverflow.com/questions/1521082/what-is-a-good-size-in-bytes-for-a-log-file
const logFileLimit = 10*1024*1024;

module.exports = {
    levels,
    restrictLogEventsTo,
    timestampFormat,
    logsDir,
    logFileLimit
}