var koa = require('koa');
var kstatic = require('koa-static');
var path = require('path');
var c2k = require('koa-connect');

module.exports = function* (mw) {
	var app = koa();
	// var client = c2k(require('./client/middleware.js')());
	// console.log(client);
  app.use(mw);
	// app.use(client);
	app.use(kstatic(path.join(__dirname, 'client/static')));
	return app;
}
