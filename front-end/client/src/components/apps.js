var item = require('./templates/apps.ejs');

var component = {
	init: function () {

	},
	render: function (params) {

		return item(params);
	}
}

module.exports = component;
