let _ = require('lodash/lodash');

export let s = {
    user: null,
    token: null
};

export let transforms = {

	login(data) {

        let {user, token} = data;

    	this.s.user = user;
    	this.s.token = token;
    	this.s.qwest.headers = {
			Authorization: 'Bearer ' + token
		};


    }

};
