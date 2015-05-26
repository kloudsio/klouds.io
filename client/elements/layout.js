import { tree, render, element} from 'segmentio/deku';

import { Page, Br } from './util.js';
import { LogoText } from './logo-text.js';
import { Login } from './login.js';
import { Grid, Item } from './apps.js';


export default function (items, events) {

	let { login, register } = events;	
	
	items = items.map((item) => <Item open={item.open}>{item.name}</Item>);
	
	let oak = tree(
		<Page>
			<LogoText>Klouds.io</LogoText> <Br />
			<Login onLogin={login} onRegister={register} /> <Br />
			<Grid>{items}</Grid>
		</Page>
	)
	
	render(oak, document.querySelector('main'))
}
