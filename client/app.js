import layout from './elements/layout'

import { user } from './lib/api'
import { transforms } from './lib/state'

import co from 'tj/co';

let items = require('./apps.yaml')


function* login(data, setState) {
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
}

function* register(data, setState) { 
	let response = yield user.register(data);
	if (!response) 
		return false;

	return yield login(data, setState);
}



// ignition.
layout(items, { login: co.wrap(login), register: co.wrap(register) });



//import csp from './libraries/js-csp.js'
//// csp util method
//let putter = (ev) => csp.putAsync(available, ev, function() {})
//// returns function(cb)
//function ixo(gen) {
//	let x = csp.chan(csp.buffers.dropping(1));
//	csp.go(gen.apply(csp, x));
//
//	return ev => csp.putAsync(x, ev, () => {});
//}




//let events = {
//	login: ixo(function* () {
//		for (;;) {
//			var login = yield this.take();
//			console.log(login);
//		}
//	}),
//
//	register: ixo(function* () {
//
//	}),
//
//	item: ixo(function* () {
//
//	}),
//}
