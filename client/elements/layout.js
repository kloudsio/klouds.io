var template = require('./templates/layout.hbs');
var Element = require('../lib/element.js');

class Layout extends Element {
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
