import { tree, render, element } from 'segmentio/deku'

import LogoText from './elements/logo-text'
import Login from './elements/login'
import Apps from './elements/apps'

import { initApp, login, register, purchase} from './events.js'


/*
	The App main 
*/

let app = tree(<div />);

initApp(app);


let nextline = () => <div class="spacer" />
let structure = 
	<div class="page">
		<LogoText>Klouds.io</LogoText>
		{ nextline() }
		<Login 
			onLogin={login} 
			onRegister={register} />
		{ nextline() }
		<Apps onApp={purchase} />
	</div>


app.mount(structure);
let main = document.querySelector('main');
render(app, main);