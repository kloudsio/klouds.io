var template = require('/templates/layout.hbs');
var Layer = require('../lib/layer.js');

require('../styles/layout.css');
require('../styles/typography.css');

class Layout extends Layer {
	constructor(selection) {
		super(selection);
	}

	render() {
		return template({
			title: '',
			body: ''
		});
	}

	mount() {
		this.select.html(this.render());
	}

	unmount() {}
}

module.exports = Layout;