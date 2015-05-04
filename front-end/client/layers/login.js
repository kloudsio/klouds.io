var template = require('/templates/login.hbs');

var co = require('tj/co');
var api = require('/lib/api');
var Layer = require('/lib/layer');


class Login extends Layer {
  constructor(selection) {
    super(selection);
  }

  render() {
    return template();
  }

  mount() {
    this.select.html(this.render());
    this.select.select('button').on('click', this.onLogin.bind(this));
  }

  unmount() {
    this.select.select('button').on('click', null);
  }

  onLogin(data) {
    var data = {
      email: this.select.select('input[type=email]').property('value'),
      password: this.select.select('input[type=password]').property('value')
    }
    co(function* () {
      var res = yield api.user.login(data);
      console.log(`User Login: ${JSON.stringify(res, false, 2)}`);
    });
  }
}

module.exports = Login;