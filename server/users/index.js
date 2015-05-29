var _ = require('lodash');
var jrouter = require('koa-joi-router')


var userStore = require('./user-db');
var routes = require('./routes');



module.exports = function* (app, context) {
	app.use(userStore);

	var router = jrouter();
	router.route(routes.create);
	router.route(routes.login);
	app.use(router.middleware());
}
