var Element = require('../lib/element.js');
var template = require('./templates/login.hbs');

var co = require('tj/co');
var api = require('../lib/api.js');


class Login extends Element {
  constructor() {
    super();

    this.eventify('register', 'button[name="register"]', 'click');
    this.eventify('login', 'button[name="login"]', 'on', 'click');
    // this.propify('password', 'input[type=password]', 'property', 'value');
    // this.propify('email', 'input[type=email]', 'property', 'value');
  }

  render(data) {
    return template(data);
  }

  bind() {
    this.login.on('click', this.onLogin.bind(this));
    this.register.on('click', this.onRegister.bind(this));
  }

  unbind() {
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