/** @jsx element */
import { tree, render, element} from 'segmentio/deku';

import { Page, Br } from './util.js';
import { LogoText } from './logo-text.js';
import { Login } from './login.js';
import { Grid, Item } from './apps.js';


export default function ({items}, {login, register}) {
	render(tree(
		<Page>
			<LogoText>Klouds.io</LogoText> <Br />
			<Login login={login} register={register} /> <Br />
			<Grid>{items}</Grid>
		</Page>
	), document.querySelector('main'))
}
