var koa = require('koa');
var kjson = require('koa-json');
var kjsonb = require('koa-json-body');
var serve = require('koa-static');
var mount = require('koa-mount');

var _ = require('lodash');
var co = require('co');
var pathJoin = require('path').join;

var util = require('./util');

var app = koa();
var log = util.logma('main');

var config;

// Serve Assets
function serveAssets() {
	_.forEach(config('assets'), function (path, key) {
		log.log('serving static files at' + path);
		app.use(serve(path, {
			defer: true
		}));
	});
}

function context(prefix) {
	var ctx = {	config: config };

	_.assign(ctx, util.logma(prefix));

	return ctx;
}

function* loadApps() {
	var modules = config('modules');
	var apps = {};

	yield _.mapValues(modules, function (dir, prefix) {
		var app = koa();
		var ctx = context(prefix);

		app.use(function* (next) {
			_.assign(this, ctx);

			this.info(this.request.path);
			yield next;
		});

		apps[prefix] = app;

		return ( require(pathJoin('../', dir)) )(app, ctx);
	});

	return apps;
}

/**
 * Load the Modules, Compose & Run the Application
 */
module.exports.start = co.wrap(function* (cfg) {
	config = cfg;

	serveAssets();

	var apps = yield loadApps();

	_.forEach(apps, function (v, prefix) {
		log.log('mounted ', prefix);
		app.use(mount(prefix, v));
	});

	log.log("binding server to port ${config('port')}");
	app.listen(config('port'));
});
