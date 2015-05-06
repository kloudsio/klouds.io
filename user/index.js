var _ = require('lodash');
var jrouter = require('koa-joi-router')


var userStore = require('./user-db');
var routes = require('./routes');



module.exports = function* () {
	this.use(userStore);

	var router = jrouter();
	router.route(routes.create);
	router.route(routes.login);
	this.use(router.middleware());
}
