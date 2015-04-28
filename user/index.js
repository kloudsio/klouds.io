var _ = require('lodash');
var router = require('koa-joi-router')
var koa = require('koa');


var Grant = require('grant-koa')
var mount = require('koa-mount')

var users = require('./users');
var routes = require('./routes');

module.exports = function* (middleware) {
  var app = koa();
  app.use(middleware);
	app.use(users);
	var api = router();
  api.route(routes.create);
	api.route(routes.login);
	app.use(api.middleware());

	// var grant = new Grant(this.config('grant'));
	// app.use(mount(grant));

  this.log('hrrm');
  this.log(app);
	return app;
}
