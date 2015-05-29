var client = require('./co-stripe');

// Customer objects allow you to perform recurring charges and track
// multiple charges that are associated with the same customer.
module.exports.createCustomer = function* () {
  this.body = yield client.customers.create({
    email: 'dan.sont@gmail.com',
    description: 'Customer for test@example.com',    
  });
}

// Subscriptions allow you to charge a customer's card on a recurring basis.
// A subscription ties a customer to a particular plan
module.exports.createSubscription = function* () {
  var customer = 'cus_66n8XA00Y3hBrW';
  var plan = '';

  this.body = yield client.customers.createSubscription(customer, {
    plan: plan
  });
}
