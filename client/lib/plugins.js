/**
 * Duo Build Plugins - Used with Makefile (ctrl+f this filename)
 */

var handlebars = require('duo-handlebars')
var babel = require('duo-babel')

var plugins = [
  babel({
    onlyLocals: true
  }),
  handlebars()
];

module.exports = plugins;
