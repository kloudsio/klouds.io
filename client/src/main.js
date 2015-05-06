var _ = require('lodash/lodash')
var d3 = require('mbostock/d3');

var Login = require('/components/login');
var Layout = require('/components/layout');
var Apps = require('/components/apps');


// var config = require('/../config/config.yaml');


document.addEventListener('DOMContentLoaded', function () {

  var layout = new Layout('div#app');
  layout.mount();

  var login = new Login('div.page');
  login.mount();
});
