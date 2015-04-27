var monk = require('monk');
var db = monk('localhost/test');

var wrap = require('co-monk');
var users = wrap(db.get('users'));

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


module.exports.login = function* () {
  var res = yield users.findOne({
    name: 'Tobi'
  });
  res.name.should.equal('Tobi');
  res.password.should.equal()

  if (!res) {
    this.status = 401;
    this.body = 'Wrong user or password';
    return;
  }

  var token = jwt.sign(profile, {
    expiresInMinutes: 60 * 5
  });
  this.json({
    token: token
  });
};

module.exports.create = function* () {
	var res = yield users.find({ email: this.body.email, password: this.body.password });
	if (res)
		res.send(400, 'That user already exists');
	yield users.insert({ name: 'Jane', species: 'ferret' });

};
