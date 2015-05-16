/** @jsx element */
import { element } from 'segmentio/deku';


export let Grid = {
	render(component) {
		let { props, state } = component;


		return (
			<div class="app-grid">
			  {props.children}
			</div>
		);
	}
}

export let Item = {
	render(component) {
		let { props, state } = component;

		return (
			<button class="app-item" onClick={props.onOpen}>
				{props.children}
			</button>
		)
	}
}
