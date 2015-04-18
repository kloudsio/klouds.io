var layout = require('./layout.css');
var typography = require('./typography.css');
var layout = require('./layout.ejs');

module.exports = function (params) {
	return layout(params);
};
