
let appinfo = require('./apps.yaml')

import layout from './elements/layout.js'


import csp from './libraries/js-csp.js'

// csp util method

let putter = (ev) => csp.putAsync(available, ev, function() {})

// returns function(cb)
function ixo(gen) {
	let x = csp.chan(csp.buffers.dropping(1));
	csp.go(gen.apply(csp, x));

	return ev => csp.putAsync(x, ev, () => {});
}


let itemify = (x) => <Item open={x.open}>{x.name}</Item>

let events = {
	login: ixo(function* () {
		for (;;) {
			var login = yield this.take();
			console.log(login);
		}
	}),

	register: ixo(function* () {

	}),

	item: ixo(function* () {

	}),
}


let items = appinfo.map(itemify)


// the deku tree
console.log(items);

layout(items, events);
