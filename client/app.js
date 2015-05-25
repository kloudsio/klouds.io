import layout from './elements/layout'

import { user } from './lib/api'
import { transforms } from './lib/state'

let items = require('./apps.yaml')


function login(data) { 
	user.login(data).then(function (res) {
		transforms.login(res);
	});
}

function register(data) { 
	user.register(data).then(user.login);
}



// ignition.
layout(items, { login: login, register: register });



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
