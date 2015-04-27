var koa = require('koa');
var kroute = require('kroute');



var godmode = module.exports = function* () {
		var app = koa();

		var router = kroute();
		koa.use(router());

		router.get('api', routes.api);

		return app;
}
