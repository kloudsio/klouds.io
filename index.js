var unheart_nodejs = "One must run me with io.js! ${'<3'}";

var main    = require('./lib/main');
var config  = require('./config');

// printout the Logo
console.log("-------------------------------------------------------------------------------------------------");
console.log("                _            _             __                       _       _   _");
console.log(" _ __ ___   ___| |_ __ _  __| | _____   __/ _| ___  _   _ _ __   __| | __ _| |_(_) ___  _ __");
console.log("| '_ ` _ \\ / _ \\ __/ _` |/ _` |/ _ \\ \\ / / |_ / _ \\| | | | '_ \\ / _` |/ _` | __| |/ _ \\| '_ \\");
console.log("| | | | | |  __/ || (_| | (_| |  __/\\ V /|  _| (_) | |_| | | | | (_| | (_| | |_| | (_) | | | |");
console.log("|_| |_| |_|\\___|\\__\\__,_|\\__,_|\\___| \\_/ |_|  \\___/ \\__,_|_| |_|\\__,_|\\__,_|\\__|_|\\___/|_| |_|");
console.log("");
console.log("MicroGrid - An Open Source Engine and Dashboard for Cloud-backed Containerized Apps and Modules.");
console.log("-------------------------------------------------------------------------------------------------");

var run = main.start(config).catch(function fatal(e) {
  console.error(err.stack);
});


// Build the client ?
var build = require('./client/build.js')
