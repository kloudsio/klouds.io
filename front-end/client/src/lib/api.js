var transforms = require('./transforms.js');
var state = require('./state.js');
var qwest = require('qwest');

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
