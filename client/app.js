import { element } from 'segmentio/deku'
import layout from './elements/layout'
import { Item } from './elements/apps'

let items = require('./apps.yaml')


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



function onLogin(data) { 
	api.login(data).then(function (res) {
		state.transforms.login(res);
	});
}

function onRegister(data) { 
	api.register(data).then(api.login);
}


// ignition.
layout(items, { login: onLogin, register: onRegister});
