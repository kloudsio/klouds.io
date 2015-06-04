var _ = require('lodash');

module.exports = _.memoize(function (key) {
	console.log(key);	
	return process.env[key.toUpperCase()];
});