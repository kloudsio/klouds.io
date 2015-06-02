
import co from 'tj/co';
import { apps, user, auth } from './api';
import { transforms } from './state';


function* initApp(app) {
	let response = yield apps.get();

	if (!response) {
		return;
	}

	var data = response.body;

	app.set('apps', data.apps);
}


function* login(data, setState) {
	let response = yield user.login(data);

	if (!response) {
		return;
	}

	var data = response.body;
	transforms.login(data);
	auth(data.token);
	setState({
		authed: true,
		text: data.token
	});
}

function* register(data, setState) {
	(yield user.register(data)) && (yield login(data, setState));
}

/*
	Enter Credit Card #
*/
function* billing(app) {

}

/*
	Pay for App
*/
function* purchase(app, token) {
	yield apps.purchase({ 
		app: app, 
		tok: token 
	});	
}


export default {
	initApp: co.wrap(initApp),
	login: co.wrap(login),
	register: co.wrap(register),
	billing: co.wrap(billing),
	purchase: co.wrap(purchase),
};