var jwt = require('koa-jwt');
var pswd = require('pswd')();
var Joi = require('joi');

module.exports.login = {
  method: 'post',
  path: '/login',
  validate: {
    body: {
      email: Joi.string().lowercase().email(),
      password: Joi.string().max(100)
    },
    type: 'json'
  },
  handler: function* () {
    var params = this.request.body;
    var user = yield this.users.findOne({
      email: params.email
    });

    if (user) {
      var match = yield pswd.compare(params.password, user.password);
      if (match) {
        var token = jwt.sign(user, this.config('jwt').secret, {
          expiresInMinutes: 60 * 5
        });
				delete user.password;
        this.body = {
          token: token,
          user: user
        };
				return;
      }
    }

    this.status = 401;
    this.body = {
      error: 'Wrong user or password'
    };
    return;
  }
};

module.exports.create = {
  method: 'post',
  path: '/create',
  validate: {
    body: {
      email: Joi.string().lowercase().email(),
      password: Joi.string().max(100)
    },
    type: 'json'
  },
  handler: function* () {
    var params = this.request.body;

    var exists = yield this.users.findOne({
      email: params.email
    });
    if (exists) {
      this.status = 401;
      this.body = {
        error: 'That user already exists'
      }
      this.log('User already exists', exists);
      return;
    }
    var hash = yield pswd.hash(params.password);
    var user = yield this.users.insert({
      email: params.email,
      password: hash
    });
    delete user.password;
    this.body = user;
  }
}



// EXAMPLE CO-MONK
// yield users.remove({});
//
// yield users.insert({ name: 'Tobi', species: 'ferret' });
// yield users.insert({ name: 'Loki', species: 'ferret' });
// yield users.insert({ name: 'Jane', species: 'ferret' });
//
// var res = yield users.findOne({ name: 'Tobi' });
// res.name.should.equal('Tobi');
//
// var res = yield users.find({ species: 'ferret' });
// res.should.have.length(3);
// Parallel inserts:
//
// yield users.remove({});
//
// yield [
//   users.insert({ name: 'Tobi', species: 'ferret' }),
//   users.insert({ name: 'Loki', species: 'ferret' }),
//   users.insert({ name: 'Jane', species: 'ferret' })
// ];
//
// var res = yield users.findOne({ name: 'Tobi' });
// res.name.should.equal('Tobi');
//
// var res = yield users.find({ species: 'ferret' });
// res.should.have.length(3);
