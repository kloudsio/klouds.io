var unheart_nodejs = `One must run me with io.js! ${'<3'}`;

var main = require('./lib/main');
var config = require('./config');


var run = main.start(config).catch(function fatal(e) {
  console.error(err.stack);
});


// Build the client ?
var build = require('./client/build.js')
