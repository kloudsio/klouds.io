var write = require('fs').writeFileSync;
var basename = require('path').basename;
var join = require('path').join;
var Duo = require('duo');


/**
 * Plugins
 */

var handlebars = require('duo-handlebars')
var babel = require('duo-babel')
var Watch = require('duo-watch')

var plugins = [];

plugins.push(handlebars());
plugins.push(babel({
  ignore: /duo_modules|node_modules/,
  onlyLocals: true,
}));

/**
 * Dir
 */
var root = __dirname;
var build = join(root, 'build');
var src = join(root, 'src');

/**
 * Watch
 */

Watch(src).watch(function (file) {
  console.log('changed: %s', file);
  var out = join(build, basename(file));

  var duo = Duo(src)
    .installTo('duo_modules')
    .token(process.env.TOKEN)
    .use(plugins)
    .cache(false)
    .entry('app.css')
    .entry('app.js')


  duo.run(function (err, str) {
    err && console.error(err);
    write(out, src);
    console.log('rebuilt: %s', file);
  });
});

console.log('waiting for changes...');
