/** @jsx element */
import {tree,render,element} from 'segmentio/deku';
import {Layout} from './elements/layout.js';
import {Login} from './elements/login.js';

var layout = tree(
	<Layout title="Klouds.io">
		<Login></Login>
	</Layout>
)

render(layout, document.querySelector('main'))
