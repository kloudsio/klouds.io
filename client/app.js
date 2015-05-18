/** @jsx element */
import { tree, render, element} from 'segmentio/deku';

var apps = require('./apps.yaml');

import { Layout } from './elements/layout.js';
import { LogoText } from './elements/logo-text.js';
import { Login } from './elements/login.js';
import { Grid, Item } from './elements/apps.js';
import { Profile } from './elements/profile.js';


import Confirmation from 'component/confirmation';



let items = apps.map((item) => {
	item.open = function() {
		alert("hello world. my world of worlds");
		console.log(JSON.stringify(item));
	}
	return <Item onOpen={item.open}>
		{item.name}
	</Item>
});




var layout = tree(
	<Layout>
		<LogoText>Klouds.io</LogoText>
		<Profile />
		<Login />
		<Grid>{items}</Grid>
	</Layout>
)


render(layout, document.querySelector('main'))
