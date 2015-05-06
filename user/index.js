var _ = require('lodash');
var jrouter = require('koa-joi-router')


var db = require('./user-db');
var routes = require('./routes');



module.exports = function* () {
	this.use(db);


	var router = jrouter();
	router.route(routes.create);
	router.route(routes.login);
	this.use(router.middleware());
}
