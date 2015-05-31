var _ = require('lodash');

/**
 * Logging methods.
 */
function logger(prefix) {
  prefix = '\x1b[0m\x1b[33m' + _.padLeft(prefix.toLowerCase(), 14);
  var loggage = {
    warn: '\x1b[35m\x1b[36m\x1b[2m :',
    error: '\x1b[31m\x1b[0m :',
    log: '\x1b[36m\x1b[0m\x1b[0m :',
    info: '\x1b[36m\x1b[2m\x1b[2m :'
  };

  return _.mapValues(loggage, function (v, method) {
    return console[method].bind(console, prefix + v);
  });
}


module.exports = {
  logger: logger,
};
