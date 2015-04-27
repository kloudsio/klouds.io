var unheart_nodejs = `One must run me with io.js! ${'<3'}`;

var config = require('./config');
var main = require('./main');

// run configuration

// include modules
var modules = {
	'/': 'front-end',
	'/user': 'user',
	'/payment': 'payment',
};

main.start(config, modules);
