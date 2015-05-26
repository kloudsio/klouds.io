import { element } from 'segmentio/deku';



export default {
	render(component) {
		let { props, state } = component;
		let apps = [];

		
		for(let app of props.apps) {
			let onClick = function (e, component, setState) {
				e.preventDefault();			
				props.onApp(app);
			}
			apps.push(<button class="col-xs-2 box app-item" onClick={onClick}>{app.name}</button>)
		}

		return <div class="row app-grid">{apps}</div>
	}
}