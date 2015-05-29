import { element } from 'segmentio/deku';
let _ = require('lodash/lodash');


let propTypes = {
	apps: {
		source: 'apps'
	}
}

function render(component) {
	let { props, state } = component;
	
	let items = _.map(props.apps, function (app) {
		return <button class="col-xs-2 box app-item" onClick={appClicked(app)}>{app.name}</button>
	});

	return <div class="row app-grid">{items}</div>
}

function afterRender(component, el) {
	let { props, state } = component;
}


function appClicked(app) {
	return function buttonClicked(e, component, setState) {
		e.preventDefault();
		props.appClicked(app, component, setState);
	}
}

export default { propTypes, render, afterRender };