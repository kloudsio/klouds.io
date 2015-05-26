import { tree, render, element } from 'segmentio/deku'
import co from 'tj/co'
import { user } from './lib/api'
import { transforms } from './lib/state'


let onLogin = co.wrap(function* (data, setState) {
	let response = yield user.login(data);
	console.log('login response', response);
	if (!response) {
		return;
	}
	var data = response.body;

	transforms.login(data);
	
	setState({ 
		authed: true, 
		text: data.token 
	});
});

let onRegister = co.wrap(function* (data, setState) {
	(yield user.register(data)) && (yield onLogin(data, setState));	
});

let onApp = co.wrap(function* (app) {
	console.dir(app);
});



import LogoText from './elements/logo-text'
import Login from './elements/login'
import Apps from './elements/apps'
let apps = require('./apps.yaml');

	
let app = tree(
	<div class="page">
		<LogoText>Klouds.io</LogoText>
		<div class="spacer"></div>

		<Login onLogin={onLogin} onRegister={onRegister} />
		<div class="spacer"></div>

		<Apps apps={apps} onApp={onApp} />
	</div>);
	
render(app, document.querySelector('main'))