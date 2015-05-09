var _ = require('lodash/lodash')
var d3 = require('mbostock/d3');

var Login = require('./element/login.js');
var Layout = require('./element/layout.js');
var Apps = require('./element/apps.js');


// var config = require('/../config/config.yaml');


document.addEventListener('DOMContentLoaded', function () {
	var layout = new Layout('div#app');
	layout.mount();


	var login = new Login('div.page');
	login.mount();
});
