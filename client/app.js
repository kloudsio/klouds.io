import { tree, render, element } from 'segmentio/deku'

import LogoText from './elements/logo-text'
import Login from './elements/login'
import Apps from './elements/apps'

import Events from './events.js'

/*
	The App
*/

let app = tree(<div />);
app.set('apps', []);

Events.initApp(app);


let nextline = () => <div class="spacer" />

let structure = 
	<div class="page">

		<LogoText>Klouds.io</LogoText>

		{nextline()}

		<Login 
			onLogin={Events.onLogin} 
			onRegister={Events.onRegister} />

		{nextline()}

		<Apps 
			onApp={Events.onApp} />
	</div>


app.mount(structure);
let main = document.querySelector('main');
render(app, main);