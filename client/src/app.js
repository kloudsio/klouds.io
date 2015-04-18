var _ = require('lodash');
var conf = require('../config.js');
var structure = require('./app.yaml');

var components = {};

components['dashboard'] = require('./components/dashboard');
components['layout'] = require('./components/layout');


function build(x) {
	function render(y) {
		return components[x.component](y);
	};

	var params = _.map(x, function (k, v) {
		if (typeof v.component !== 'undefined') {
			return build(v);
		}
		return v;
	});

	//Render Component
	return render(params);
}

var html = build(structure);

document.addEventListener("DOMContentLoaded", function () {
	document.body.innerHTML = html;
});
