import { tree, render, element } from 'segmentio/deku'

import LogoText from '../elements/logo-text'
import Login from '../elements/login'
import Apps from '../elements/apps'
import Stripe from '../elements/stripe'

import { initApp, login, register, purchase} from './events'

// Reveal
function reveal(item) {
	console.log(item);
	let options = {
		item: item,
	  description: `Recurring Monthly Subscription to ${item.name}`,
    amount: 10.00
	};
	app.set('stripe_pk', process.env.STRIPE_PK);
	app.set('showStripe', options);
}

/*
	The App main
*/

let app = tree(<div />);

initApp(app);


let nextline = () => <div class="spacer" />

let structure = (
	<app>
		<div class="page">
			<LogoText>Klouds.io</LogoText>
			<Login onLogin={login} onRegister={register} />
			<Apps onOpen={reveal} />
			<Stripe onToken={purchase} />
		</div>
	</app>
);

app.mount(structure);

let main = document.querySelector('main');
render(app, main);