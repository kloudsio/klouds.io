var koa = require('koa');
var kroute = require('kroute');
var kjson = require('koa-json');


var client = null;

var costripe = require('./co-stripe');
var plans = require('./plans');
var routes = require('./routes');
var _ = require('lodash');


module.exports = function* () {

  this.log ('Payment Module...');
  client = costripe(this.config('stripe_sk'));

  // Stripe API -> missing plans? -> create
  this.log('syncing stripe...');
  var created = yield plans.sync;
  _.map(created, function (v, k) {
    this.log('Plan Created: \'%s\'', ids[k]);
  });
  this.log('stripe sync complete.');

  // KOA
  var app = koa();
  var krouter = kroute();
  app.use(kjson());
  app.use(krouter);

  // Routes
  krouter.post('/subscribe', routes.subscribe);

  return app;
}
