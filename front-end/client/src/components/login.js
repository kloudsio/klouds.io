var co = require('co');
var template = require('../templates/login.ejs');
var api = require('../lib/api.js');
var Layer = require('../lib/layer.js');


class Login extends Layer {
	constructor(selection) {
		super(selection);
	}

	render() {
		return template();
	}

	mount() {
		this.select.html(this.render());
		this.select.select('button').on('click', this.login.bind(this));
	}

	unmount() {
		this.select.select('button').on('click', null);
	}

	login(data) {
		var data = {
			email: this.select.select('input[type=email]').property('value'),
			password: this.select.select('input[type=password]').property('value')
		}
		co(function*() {
			var res = yield api.user.login(data);
		});
	}
}

module.exports = Login;
