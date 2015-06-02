/**
 * Duo Build Plugins - Used with Makefile (ctrl+f this filename)
 */

var babel = require('duo-babel')
var myth = require('duo-myth');

var plugins = [
  babel({ onlyLocals: true }),
  myth(),
];

module.exports = plugins;
