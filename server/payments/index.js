var _ = require('lodash');
var router = require('koa-joi-router');

var costripe = require('./co-stripe');
var plans = require('./plans');
var routes = require('./routes');

module.exports = function* (app, ctx) {

  costripe(ctx.config('stripe_sk'));

  if (ctx.config('stripe_sync')) {
    ctx.info('syncing stripe...');
    yield plans.sync;
    ctx.info('stripe sync complete.');
  }

  // KOA
  var payments = router();
  app.use(payments.middleware());

  // Routes
  payments.post('/subscribe', routes.createSubscription);
}
