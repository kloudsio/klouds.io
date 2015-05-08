var _ = require('lodash');
var pathJoin = require('path').join;

var secrets = require('./secrets');

var config = {
	db: 'localhost/test',
	port: 5080,

	modules: {
		'/user': './user',
		// '/payment': './payment',
		// '/godmode': './dev-interface',
	},

	assets: {
		'/': pathJoin(__dirname, 'client/build')
	},

	jwt: {
		secret: secrets.jwt,
	},

	stripe_sync: false,
	stripe_sk: secrets.stripe,

};

function envConfig(key, defaults) {
	k = key.toUpperCase();
	if (typeof process.env[k] !== 'undefined') {
		return process.env[k];
	}
	return fileConfig(key);
}

function fileConfig(key, defaults) {
	k = key.toLowerCase();
	if (typeof config[k] !== 'undefined') {
		return config[k];
	}
	return defaults;
}

function get(key, defaults) {
	var res = envConfig(key);
	if (typeof res !== 'undefined')
		return res;

	throw `Configuration not found: ${key}`;
}

module.exports = _.memoize(get);
