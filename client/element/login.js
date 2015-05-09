var co = require('tj/co');

var template = require('../templates/login.hbs');
var api = require('../api.js');
var Element = require('../element.js');


class Login extends Element {
  constructor(selection) {
    super(selection);
  }

  render(data) {
    return template(data);
  }

  mount() {
    this.select.html(this.render());

    this.password = this.select.select('input[type=password]')
    this.email = this.select.select('input[type=email]')
    this.login = this.select.select('button[name="login"]')
    this.register = this.select.select('button[name="register"]')

    this.login.on('click', this.onLogin.bind(this));
    this.register.on('click', this.onRegister.bind(this));
  }

  unmount() {
    this.login.on('click', null);
    this.register.on('click', null);
  }

  onLogin(data) {
    var data = {
      email: this.email.property('value'),
      password: this.password.property('value')
    }

    co(function* () {
      var res = yield api.user.login(data);
      console.log(`User Login: ${JSON.stringify(res, false, 2)}`);
    });
  }

  onRegister(data) {

    var data = {
      email: this.email.property('value'),
      password: this.password.property('value')
    }

    co(function* () {
      var res = yield api.user.register(data);
      console.log(`User Login: ${JSON.stringify(res, false, 2)}`);
    });

  }
}

module.exports = Login;
