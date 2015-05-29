
import co from 'tj/co'
import { apps, user } from './lib/api'
import { transforms } from './lib/state'


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
	
	setState({ 
		authed: true, 
		text: data.token 
	});
}

function* register(data, setState) {
	(yield user.register(data)) && (yield login(data, setState));
}

/*
	Pay for App
*/
function* purchase(app) {
	console.dir(app);
}


export default {
	initApp: co.wrap(initApp),
	login: co.wrap(login),
	register: co.wrap(register),
	purchase: co.wrap(purchase),
};