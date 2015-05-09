var _ = require('lodash/lodash');


/**
 * Alter the application state.
 * arg function|object arg.call(state) or _.assign(state, arg)
 */
function set(arg) {
  var old = state;
  if (_.isFunction(arg))
    arg.call(state)
  else
    _.assign(state, arg);
}

function on(key, cb) {
  cb();
}

var state = {
  set: set,
  on: on,
  user: null,
  token: null,
}

module.exports = state;
