var co = require('co');
var _ = require('lodash');
var pathJoin = require('path').join;

var koa = require('koa');
var serve = require('koa-static');
var mount = require('koa-mount');

var util = require('./util');

/*
	Main App
*/
var app = koa();

/*
	Main Logger
*/
var log = util.logger('main').log;

/*
	Lets us throw errors
*/
app.use(function *(next) {
  try {
    yield next;
  } catch (err) {
    this.status = err.status || 500;
    this.body = err.message;
    this.app.emit('error', err, this);
  }
});

/*
	Serves Client
*/

var assets = process.env.ASSETS;

if (assets) {
	log(`serving static files at ${assets}`);
	app.use(serve(assets, { defer: true } ));
}

module.exports.create = function (name) {
	log(`Creating Module ${name}`);

	var sub = koa();

	// Sub-Context
	sub.use(function* (next) {
		// this.warn().error().log().info()
		_.assign(this,  util.logger(name));

		this.log(this.request.path);
		yield next;
	});

	return sub;
}

module.exports.mount = function (location, sub) {
	log(`Mounted ${location}`);

	app.use(mount(location, sub));
}

module.exports.listen = function () {
	var port = process.env.PORT;
	app.listen(port);
}

