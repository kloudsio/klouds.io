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
		return <div class='app-item'>
			<h4>{app.name}</h4>
			<p>{app.description}</p>
			<button onClick={itemClick(app)}>Host ${app.amount} per month. </button>
		</div>
	});

	let itemsOff = _.map(appsOff, function (app) {
		return <div class={['upcoming-item']}>{app.name}</div>
	});

	return <div class="step">
			<h4>Host me a...</h4>
			<div class="row middle-xs">
	          <div class="col-xs-2 center-xs">
	            <i class="num">2</i>
	          </div>
	          <div class="col-xs-10">
				  {itemsOn}
				</div>
			</div>


			<div class="row middle-xs">
	          <div class="col-xs-2 center-xs">
	            <i class="num">2</i>
	          </div>
	          <div class="col-xs-10">
	          	{itemsOff}
	          </div>
			</div>
		</div>
}

function afterRender(component, el) {
	let { props, state } = component;
}



export default { propTypes, render, afterRender };
