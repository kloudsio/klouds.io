var apps = require('../templates/apps.ejs');

var component = {
	init: function () {

	},
	render: function (params) {

		return apps(params);
	}
}

module.exports = component;
