var template = require('./layout.ejs');

var component = {
	init: function (params) {
		require('./layout.css');
		require('./typography.css');
	},
	render: function (params) {
		return template(params);
	}
}

module.exports = component;
