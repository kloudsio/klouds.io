var template = require('./templates/layout.ejs');
	require('./styles/layout.css');
	require('./styles/typography.css');

var component = {
	init: function (params) {
	},
	render: function (params) {
		return template(params);
	}
}

module.exports = component;
