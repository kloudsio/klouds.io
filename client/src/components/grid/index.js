var item = require('./item.ejs');

var component = {
	init: function () {

	},
	render: function (params) {

		return item(params);
	}
}

module.exports = component;
