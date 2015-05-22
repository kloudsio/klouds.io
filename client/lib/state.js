let _ = require('lodash/lodash');

export let state = {
    user: null,
    token: null
};

export let transforms = {

	login(data) {

        let {user, token} = data;

    	this.state.user = user;
    	this.state.token = token;
    	this.state.qwest.headers = {
			Authorization: 'Bearer ' + token
		};


    }

};
