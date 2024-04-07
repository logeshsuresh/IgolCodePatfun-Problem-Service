const winston = require('winston');
require('winston-mongodb');
const { LOG_DB_URL } = require('../config/server.config');

const allowedTransports = [];

// The below transport configuration enables logging on the Console
allowedTransports.push(new winston.transports.Console({
    format: winston.format.combine(
        winston.format.colorize(),
        // First arguement to the combine method => defines how we want the timestamp to come up
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        // Second arguement to the combine method => defines what is exactly going to be printed on the log
        winston.format.printf((log) => `${log.timestamp} [${log.level}]: ${log.message}`),
    )
}));

// The below transport configuration enables logging in the MongoDB database
allowedTransports.push(new winston.transports.MongoDB({
    level: 'error',
    db: LOG_DB_URL,
    collection: 'logs',
}));

// The below transport configuration enables logging to the File System
allowedTransports.push(new winston.transports.File({
    filename: `app.log`
}));

const logger = winston.createLogger({
    format: winston.format.combine(
        // First arguement to the combine method => defines how we want the timestamp to come up
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        // Second arguement to the combine method => defines what is exactly going to be printed on the log
        winston.format.printf((log) => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`)
    ),
    transports: allowedTransports
});

module.exports = logger;