import { tree, render, element } from 'segmentio/deku'

/*
	App + Config
*/

let app = tree(<div />);

app.set('stripe_pk', process.env.STRIPE_PK);


/*
	App Events
*/

let show = async function (item) {
  app.set('payment', {
    id: item.id,
    name: item.name,
    description: `Recurring Monthly Subscription to ${item.name}`,
    amount: 10.00
  });
}

app.set('setUser', function (user) {
	app.set('user', user);
});
app.set('showPurchase', show);

import api from './api'

app.set('fetchApps', api.fetchApps);
app.set('sendLogin', api.sendLogin);
app.set('sendRegister', api.sendRegister);
app.set('sendPurchase', api.sendPurchase);

/*
	Make Render Tree
*/

import LogoText from '../elements/logo-text'
import Login from '../elements/login'
import Apps from '../elements/apps'
import Stripe from '../elements/stripe'

app.mount(
	<div class="page">
		<LogoText>Klouds.io</LogoText>
		<Login />
		<Apps />
		<Stripe />
	</div>
);

render(app, document.querySelector('main'));

export default { 
	app: app
};