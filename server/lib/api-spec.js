var main = require('./main');

function apiSpec() {
	var spec = main.getJoiRoutes();
	return spec;
}

module.exports = apiSpec;
