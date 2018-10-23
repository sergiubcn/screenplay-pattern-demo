const configBase = require('./wdio.conf');

/** This config file adds settings for debugging. */
exports.config = Object.assign(configBase.config, {
    debug: true,
    execArgv: ['--inspect=127.0.0.1:5859']
})