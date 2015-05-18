/**
 * Duo Build Plugins - Used with Makefile (ctrl+f this filename)
 */

var babel = require('duo-babel')
var yaml = require('duo-yaml');
var myth = require('duo-myth');

var plugins = [
  babel({
    onlyLocals: true,
    // ignore: /node_modules/
  }),
  yaml(),
  myth(),
];

module.exports = plugins;
