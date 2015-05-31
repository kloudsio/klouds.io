
var _ = require('lodash');

var route = require('koa-route');

var main = require('../lib/main.js');
var config = require('../config.js');

var stripe = require('stripe')(config('stripe_sk'));


function* purchase() {
    var stripeToken = this.body.stripeToken;

    stripe.customers.create({
      source: stripeToken,
      plan: "3",
      email: "payinguser@example.com"
    }, function(err, customer) {

    })
}

var app = main.create('Payments');

app.use(route.post('/', purchase));

main.mount('/payment', app);
