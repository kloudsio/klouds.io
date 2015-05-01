var state = require('./state');

var	transforms = {
	login: setUser
};

function setUser({user, token}) {
  state.set(function () {
    this.user = user;
    this.token = token;
		this.qwest.headers = {
	    Authorization: 'Bearer ' + token
	  };
  });
}

module.exports = transforms;
