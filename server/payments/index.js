
var _ = require('lodash');

var route = require('koa-route');

var main = require('../lib/main.js');
var config = require('../config.js');

var stripe = require('stripe')(config('stripe_sk'));

/*
  DB
*/
var monk = require('monk');
var wrap = require('co-monk');

function* stripeStore(next) {
  this.db = monk(config('db'));
  this.stripeDb = wrap(this.db.get('stripe'));
  yield next;
}

function stripeCustomerCreate(customer) {
  return function(cb) {
    return stripe.customers.create(customer, cb)
  }      
}

function* payment() {
  var params = this.request.body;
  var app = params.app;
  var tok = params.tok;
      
  var customer = {
    source: tok,
    plan: "web_application",
    email: this.state.user.email
  }
  console.log('Stripe Customer', customer);    

  var customer = yield stripeCustomerCreate(customer);
  this.assert(customer, 500, 'Stripe could not process your payment! Send them a complaint. :)');
  console.log('Stripe Customer', customer);    
  this.body = { customer: customer.id };
  
  var inserted = yield this.stripeDb.insert(customer);
}


var jsonBody = require('koa-json-body');
var json = require('koa-json');
var auth = require('koa-jwt')({secret: config('jwt').secret });

var app = main.create('Payments');
app.use(auth);
app.use(jsonBody({ limit: '10kb' }));
app.use(json());
app.use(stripeStore);

app.use(route.post('/', payment));
main.mount('/payment', app);
