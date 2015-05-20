var _ = require('lodash');
var costripe = require('./co-stripe');

var plans = [{
	amount: 999,
	interval: "month",
	name: "Monthly Subscription",
	currency: "usd",
	id: "monthly",
	trial_period_days: 0
}, {
	amount: 9999,
	interval: "year",
	name: "Yearly Subscription",
	currency: "usd",
	id: "yearly"
}, ];


var sync = function* () {

	var ids = _.pluck(plans, 'id');

	// Create Missing Plans
	var created = _.compact(yield _.map(ids, function (v, k) {
		return costripe.plans.retrieve(v).then(function (res) {
			// Plan already exists
			return false;
		}, function (err) {
			// Create the missing plan
			return costripe.plans.create(plans[k]);
		});
	}));

	return created;
}

module.exports.sync = sync;
