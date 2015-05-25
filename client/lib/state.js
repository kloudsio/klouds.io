let _ = require('lodash/lodash');

export default {
    user: null,
    token: null
};

export let transforms = {
	login(data) {
        let { user, token } = data;

    	this.user = user;
    	this.token = token;
    }
};
