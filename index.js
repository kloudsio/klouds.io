var unheart_nodejs = `One must run me with io.js! ${'<3'}`;

var main = require('./main');
var co = require('co');

// include modules
var modules = {};

// modules['/'] = require('./client');
modules['/payment'] = require('./payment');

main.start(modules);
