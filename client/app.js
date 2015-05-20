/** @jsx element */
import { tree, render, element} from 'segmentio/deku';

var apps = require('./apps.yaml');

import { Page } from './elements/page.js';
import { LogoText } from './elements/logo-text.js';
import { Login } from './elements/login.js';
import { Grid, Item } from './elements/apps.js';
// import { Profile } from './elements/profile.js';

// import Confirmation from 'component/confirmation';

let listen = {
		login: function(e, component) {
			console.log(component.data());

		}
}

let cascasions = {
	becomeLoggedIn() {
		console.log('Cascade')
		console.log(this);
		console.log(arguments);
	},
}


let items = apps.map((item) => {
	item.open = function() {
		alert("hello world. my world of worlds");
		console.log(JSON.stringify(item));
	}

	return <Item onOpen={item.open}>
		{item.name}
	</Item>
});

let Slash = {
	render() {
		return <div class="spacer" />
	}
}

var top = tree(
	<Page>
		<LogoText>Klouds.io</LogoText>
		<Login onLogin={listen.login} />
		 <Slash />
		<Grid>{items}</Grid>
		 <Slash />
	</Page>
)
top.cascasions = cascasions;

render(top, document.querySelector('main'))
