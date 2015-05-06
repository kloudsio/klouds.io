#!/bin/iojs

var duo = require('duo')(__dirname + '/src');
var co = require('co');

var plugins = require('./duo-plugins');

duo
	.installTo('./duo_modules')
	.use(plugins)
	.cache(false)

co(function* () {
	var results = {
		js: yield duo.entry('main.js').write(),
		css: yield duo.entry('main.css').write(),
	};

	console.dir(results);

}).catch(function (e) {
	console.error(e.stack);
});
