var koa = require('koa');
var mount = require('koa-mount');
var co = require('co');
var _ = require('lodash');
var path = require('path');

var configjs = require('./config');

var app = koa();

module.exports.start = function (modules) {
  co(function* main() {

    var apps = yield _.mapValues(modules, function (_module, _path) {
      return _module.call(context);
    });

		_.forEach(apps, function(v, k) {
			app.use(mount(k, v));
		});

    app.listen(config('port'));
  }).catch(function onError(err) {
	  console.error(err.stack)
	});
}

function config(cfg) {
	// ENV
  ekey = cfg.toUpperCase();
  if (typeof process.env[ekey] !== 'undefined') {
    console.info(`Using ENV.${ekey}: ${process.env[ekey]}`);
    return process.env[ekey];
  }

	// CONFIG File
  cfg = cfg.toLowerCase();
  if (typeof configjs[cfg] !== 'undefined') {
    console.info(`Using CFG.${cfg}: ${configjs[cfg]}`);
    return configjs[cfg];
  }

  throw `Env var or Configuration for missing variable ${cfg}`;
}

config = _.memoize(config);

var context = {
	config: config
};
