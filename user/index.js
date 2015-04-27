var koa = require('koa');
var kroute = require('kroute');
var kjson = require('koa-json');
var mount = require('koa-mount')
var Grant = require('grant-koa')
var kjsonb = require('koa-json-body');

var routes = require('./routes');


module.exports = function* () {
  // KOA
  var app = koa();
  var krouter = kroute();
  app.use(kjson());
	app.use(kjsonb());
  app.use(krouter);
	app.use(function *() {
		this.body = this.request.body;
	});

	var grant = new Grant(this.config('grant'))
	app.use(mount(grant))

  // Routes
	krouter.post('/login', routes.login);
  krouter.post('/create', routes.create);

  return app;
}
