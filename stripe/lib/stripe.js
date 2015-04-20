var stripe = require("stripe");

var plans = {
	app: {
		amount: 1000,
		interval: "month",
		name: "",
		currency: "usd",
		id: "app"
	}
};

function setup(options) {
	stripe.plans.create(, function(err, plan) {
		if (err) {
			console.error(err);
		}
		console.dir(plan);
	});

	module.exports = {
		setup: function () {

		},
	};
}

function createCustomer() {

	stripe.customers.create({
	  source: stripeToken,
	  plan: "gold",
	  email: "payinguser@example.com"
	}, function(err, customer) {
	  // ...
	});
}
