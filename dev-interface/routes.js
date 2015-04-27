module.exports.api = function* () {
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
