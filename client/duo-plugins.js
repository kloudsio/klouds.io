var handlebars = require('duo-handlebars')
var babel = require('duo-babel')

var plugins = [
  babel({
    ignore: /duo_modules|node_modules/,
    // extensions	: [".es6", ".es", ".jsx", ".js", ".hbs"]
    onlyLocals: true,
    // sourceMaps: 'inline'
  }),
  handlebars()
];

module.exports = plugins;
