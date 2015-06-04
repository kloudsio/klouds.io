var _ = require('lodash');
var route = require('koa-route');
var jsonBody = require('koa-json-body');
var json = require('koa-json');
var koajwt = require('koa-jwt');


var main = require('../lib/main.js');
var config = require('../config.js');
var stripe = require('stripe')(process.env.STRIPE_SK);
var auth = koajwt({ secret: process.env.JWT_KEY });

/*
  DB
*/
var monk = require('monk');
var wrap = require('co-monk');

function* stripeStore(next) {
  this.db = monk(process.env.MONGODB);
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



var app = main.create('Payments');
app.use(auth);
app.use(jsonBody({ limit: '10kb' }));
app.use(json());
app.use(stripeStore);

app.use(route.post('/', payment));
main.mount('/payment', app);
