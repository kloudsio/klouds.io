var _ = require('lodash');
var router = require('koa-joi-router')


var Grant = require('grant-koa')
var mount = require('koa-mount')

var users = require('./users');
var routes = require('./routes');

module.exports = function* (app) {


	app.use(users);

  var jrouter = router()

  jrouter.get('/login', routes.login);
  jrouter.post('/create', routes.create.config, routes.create.handler);
	app.use(jrouter.middleware());

	var grant = new Grant(this.config('grant'));
	app.use(mount(grant));

	return app;
}
