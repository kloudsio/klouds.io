var component = {
	init: function (params) {
		return StripeCheckout.configure({
			key: 'pk_test_ZiaPtzyhxC1KKed0X2PzTB0a',
			token: function (token) {
				// Use the token to create the charge with a server-side script.
				// You can access the token ID with `token.id`
			}
		});
	},
	render: function () {}
}

module.exports = component;
