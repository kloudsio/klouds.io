/** @jsx element */
import { element } from 'segmentio/deku';


export let Grid = {
	render(component) {
		let { props, state } = component;

		return (
			<div class="row app-grid">
			  {props.children}
			</div>
		);
	}
}

export let Item = {
	render(component) {
		let { props, state } = component;

		return (
			<button class="col-xs-2 box app-item" onClick={props.onOpen}>
				{props.children}
			</button>
		)
	}
}
