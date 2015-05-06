var _ = require('lodash');
var router = require('koa-joi-router');

var costripe = require('./co-stripe');
var plans = require('./plans');
var routes = require('./routes');

module.exports = function* () {

  costripe(this.config('stripe_sk'));

  if (this.config('stripe_sync')) {
    this.info('syncing stripe...');
    yield plans.sync;
    this.info('stripe sync complete.');
  }

  // KOA
  var payments = router();
  this.use(payments.middleware());

  // Routes
  payments.post('/subscribe', routes.createSubscription);
}
