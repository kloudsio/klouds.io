var koa = require('koa');
var kroute = require('kroute');
var kjson = require('koa-json');


var client = null;

var costripe = require('./co-stripe');
var plans = require('./plans');
var routes = require('./routes');


module.exports = function* () {
  client = costripe(this.config('stripe_sk'));

  // Stripe API -> missing plans? -> create
  yield plans.sync;

  // KOA
  var app = koa();
  var krouter = kroute();
  app.use(kjson());
  app.use(krouter);

  // Routes
  krouter.post('/subscribe', routes.subscribe);

  return app;
}
