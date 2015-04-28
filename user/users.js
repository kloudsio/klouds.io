var monk = require('monk');
var wrap = require('co-monk');

module.exports = function* () {
	this.db = monk(this.config('db'));
	this.users = wrap(this.db.get('users'));
}
