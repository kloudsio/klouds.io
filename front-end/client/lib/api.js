var qwest = require('pyrsmk/qwest:qwest.min.js');

var transforms = require('/lib/transforms.js');
var state = require('/lib/state.js');

var apiSpec = {
  user: {
    register: null,
    login: login,
  },

  subscription: {
    create: null,
    delete: null,
  }
};

function* login(data) {
  var res = yield qwest.post('/user/login', data, state.qwest);
  transforms.login(res);
  return res;
}

module.exports = apiSpec;