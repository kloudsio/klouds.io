import { element } from 'segmentio/deku';
let _ = require('lodash/lodash');


function itemClick(app) {
	return function (e, component, setState) {		
		component.props.onOpen(app, component, setState);
	}
}

let propTypes = {
	apps: {
		source: 'apps'
	}
}

function render(component) {
	let { props, state } = component;
	
	let [appsOff, appsOn] = _.partition(props.apps, 'disabled');
	
	let itemsOn = _.map(appsOn, function (app) {
		return <button class={['app-item']} onClick={itemClick(app)}>{app.name}</button>
	});

	let itemsOff = _.map(appsOff, function (app) {
		return <div class={['upcoming-item']}>{app.name}</div>
	});

	return <div class="row">
		<h4>Host me a...</h4>
		<div class="col-xs center-xs">
			{itemsOn}
		</div>
		<h4>Upcoming</h4>
		<div class="col-xs">
			{itemsOff}
		</div>
	</div>
}

function afterRender(component, el) {
	let { props, state } = component;
}



export default { propTypes, render, afterRender };