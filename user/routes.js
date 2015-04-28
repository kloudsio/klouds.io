var jwt = require('koa-jwt');
var Joi = require('joi');

module.exports.login = function* () {
	var res = yield this.users.findOne({
		email: this.body.email,
		password: this.body.password
	});

	if (!res) {
		this.status = 401;
		this.body = 'Wrong user or password';
		return;
	}

	var token = jwt.sign(res, this.config('jwt').secret, {
		expiresInMinutes: 60 * 5
	});
	this.body = {
		token: token
	};
};

module.exports.create = {
	config: {
		validate: {
			body: {
				email: Joi.string().lowercase().email(),
				password: Joi.string().max(100)
			},
			output: {
				id: Joi.string(),
			},
			type: 'json'
		},
	},
	handler: function* () {
  	var params = this.request.body;

  	var res = yield this.users.find({
  		email: params.email
  	});
  	if (res) {
  		this.status = 400;
  		this.body = 'That user already exists';
  		this.log('User already exists', res);
  		return;
  	}
  	res = yield this.users.insert({
  		email: params.email,
  		password: params.password
  	});
  	this.info(res);
  	this.body = res;
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
