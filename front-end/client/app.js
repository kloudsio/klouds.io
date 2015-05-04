var _ = require('lodash/lodash')
var d3 = require('mbostock/d3');

var Login = require('./layers/login');
var Layout = require('./layers/layout');
var Apps = require('./layers/apps');


var config = require('./config.yaml');


document.addEventListener('DOMContentLoaded', function () {

  var layout = new Layout('div#app');
  layout.mount();

  var login = new Login('div.page');
  login.mount();
});
