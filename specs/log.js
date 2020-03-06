'use strict';
//initialization of log4js library
const log4js = require('log4js');

//path to save logs
log4js.configure({
    appenders:
        {
            output:
                {
                    type: 'file',
                    filename: './logs/project.log',
                    category: 'info' || 'warn' || 'error' || 'debug',
                    maxLogSize: 10485760,
                    backups: 3,
                    compress: true
                }
        },
    categories:
        {default: {appenders: ['output'], level: 'warn' || 'debug' || 'info' || 'error'}},

});

var logger = function (prefix) {

    //calling getLogger method
    const logger = log4js.getLogger(prefix);

    //info
    this.logLevelInfo = (params) => {
        params = params || "";
        logger.level = 'info';
        logger.info(params);
    };

    //debug
    this.logLevelDebug = (params) => {
        params = params || "";
        logger.level = 'debug';
        logger.debug(params);
    };

    //warn
    this.logLevelWarn = (params) => {
        params = params || "";
        logger.level = 'warn';
        logger.warn(params);
    };

    //error
    this.logLevelError = (params) => {
        params = params || "";
        logger.level = 'error';
        logger.error(params);
    };
}

function getLogger(prefix) {
    prefix = prefix || "";
    return new logger(prefix);
}

module.exports = getLogger;