var co = require('co'),
	_ = require('lodash'),
	fs = require('fs')
	handlebars = require('duo-handlebars'),
  babel = require('duo-babel'),
	Duo = require('duo')

var plugins = [
  babel({
    ignore: /duo_modules|node_modules/,
		// extensions	: [".es6", ".es", ".jsx", ".js", ".hbs"]
		onlyLocals: true,
		// sourceMaps: 'inline'
  }),
	handlebars()
];

var duo = new Duo(__dirname)
	.entry('app.js')
	.installTo('./duo_modules')
  .use(plugins)
	.token('')

co(function* () {
	var src = yield duo.write();
	console.log(` ${Buffer.byteLength(src)/1024}kb`);

}).catch(function (e) {
  console.error(e.stack);
});;
