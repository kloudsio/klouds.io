import { element } from 'segmentio/deku';

let _ = require('lodash/lodash');


let Item = {
	propTypes: {
		user: {
			source: 'user'
		}
	},

	render(c) {
		let { props } = c;

		return <div class="item">
			<h4>{props.name}</h4>
			<p>{props.description}</p>
			<button disabled={!props.user} onClick={props.onOpen}>{props.button}</button>
		</div>
	}
}


let propTypes = {
	user: {
		source: 'user'
	},
	showPurchase: {
		source: 'showPurchase'
	},
	fetchApps: {
		source: 'fetchApps'
	}
}

function initialState (props) {
  return {    
  	itemsOn: [],
	itemsOff: []
  }
}
 
let afterMount = async function (c, el) {
	let { props } = c;
	let items = await props.fetchApps();

	let [appsOff, appsOn] = _.partition(items.apps, 'disabled');

	let itemsOn = [];
	let itemsOff = [];

	for (let app of appsOn) {
		itemsOn.push(<Item name={ app.name } description={ app.description } button="Launch" onOpen={ props.showPurchase } />);
	}

	for (let app of appsOff) {
		itemsOff.push( <app-off>{app.name}</app-off> );
	}

	return { 
    	itemsOn: itemsOn,
    	itemsOff: itemsOff
  	}
}

function render(c) {

	let { state, props } = c;

	return <grid>
		<div class="row">
		  <div class="col-xs-2">
		    <span class="num">2</span>
		  </div>
		  <div class="col-xs-10 middle-xs">
			  <h2>Purchase Apps</h2>
			  {state.itemsOn}
			</div>
		</div>


		<div class="row middle-xs">
		  <div class="col-xs-2 center-xs">
		    <i class="num">3</i>
		  </div>
		  <div class="col-xs-10">
		  	{state.itemsOff}
		  </div>
		</div>
	</grid>
}

export default { initialState, propTypes, afterMount, render };
