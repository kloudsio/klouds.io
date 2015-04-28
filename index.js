var unheart_nodejs = `One must run me with io.js! ${'<3'}`;

var config = require('./config');
var main = require('./lib/main');

// run configuration

// include modules
var modules = {
	'/user': 'user',
	// '/payment': 'payment',
	// '/godmode': 'dev-interface',
	// '/': 'front-end',
};

main.start(config, modules);
