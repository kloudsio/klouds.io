/**
 * Duo Build Plugins - Used with Makefile (ctrl+f this filename)
 */

var babel = require('duo-babel')
var yaml = require('duo-yaml');
var myth = require('duo-myth');

var plugins = [
  babel({
    only: [
        'client/app.js',
        'client/lib/browser-polyfill.js',
        'client/elements/**.js'
    ]
  }),
  yaml(),
  myth(),
];

module.exports = plugins;
