
var _ = require('lodash');
var stripe = require('stripe')
var thenifyAll = require('thenify-all');



module.exports = function (sk) {
	client = stripe(sk);


	module.exports.customers = thenifyAll(_.bindAll(client.customers));
	module.exports.plans = thenifyAll(_.bindAll(client.plans), {}, ['del', 'update', 'retrieve', 'list', 'create']);
	
	return client;
};
