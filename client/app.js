/** @jsx element */
import { tree, render, element} from 'segmentio/deku';

var apps = require('./apps.yaml');

import { Layout } from './elements/layout.js';
import { Login } from './elements/login.js';
import { Grid, Item } from './elements/apps.js';


console.log(apps);

let items = apps.map((item) => (
	<Item>
		{item.name}
	</Item>
));


let options = [
	{
		id: 'add github',
		name: 'Any Github Folder'
	}, {
		id: 'add upload',
		name: 'A Directory'
	}, {
		id: 'add code',
		name: 'html, js, etc.'
	}
];


var layout = tree(
	<Layout>
		<Login />
		<Grid>{items}</Grid>
	</Layout>
)


render(layout, document.querySelector('main'))
