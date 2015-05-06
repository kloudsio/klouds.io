var router = require('koa-joi-router');
var routes = require('./routes');

module.exports = function* (app) {


	var devui = router();
	app.use(devui.middleware());

	devui.get('/api', routes.api);

	return app;
}
