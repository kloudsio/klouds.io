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



// Serve Assets
function serveAssets(config) {
	_.forEach(config('assets'), function (path, key) {
		log.log('serving static files at' + path);
		app.use(serve(path, {
			defer: true
		}));
	});
}

function loadApps(config) {
	var modules = config('modules');
	var apps = {};

	return _.mapValues(modules, function (dir, url) {
		var mountable = apps[url] = koa();

		mountable.use(function* (next) {
			this.config = config;
			_.assign(this, util.logma(url));
			this.info(this.request.url);
			yield next;
		});

		return require(pathJoin('../', dir)).apply(mountable);
	});
}

/**
 * Load the Modules, Compose & Run the Application
 */
module.exports.start = co.wrap(function* (config) {

	serveAssets(config);

	var apps = yield loadApps(config);


	_.forEach(apps, function (v, url) {
		log.log('mounted ', url);
		app.use(mount(url, v));
	});

	log.log("binding server to port ${config('port')}");
	app.listen(config('port'));
});
