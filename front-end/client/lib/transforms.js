var state = require('./state');

function setUser({user, token}) {
  state.set(function () {
    this.user = user;
    this.token = token;
		this.qwest.headers = {
	    Authorization: 'Bearer ' + token
	  };
  });
}

var	transforms = {
	login: setUser
};

module.exports = transforms;
