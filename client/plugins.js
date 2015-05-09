var handlebars = require('duo-handlebars')
var babel = require('duo-babel')

var plugins = [
  babel({}),
  handlebars()
];

module.exports = plugins;
