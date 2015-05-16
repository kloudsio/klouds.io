/**
 * Duo Build Plugins - Used with Makefile (ctrl+f this filename)
 */

var babel = require('duo-babel')
var yaml = require('duo-yaml');

var plugins = [
  yaml,
  babel({
    onlyLocals: true
  }),
];

module.exports = plugins;
