/** @jsx element */
import { element } from 'segmentio/deku'



export let Profle = {

  render(component) {
		let { props, state } = component;

    return
			(<div class="profile">
				{props.children}
			</div>);
  },

	afterRender: function(component) {

		component.menu = new Menu()
			.add('Upload')
			.add('Code View')
			.add('Github Url')
			.add('Log out')
			.on('Log out', ()  => {
			  console.log('Logging out user');
			});
		component.open = (e) => {
		  e.preventDefault();
			component.menu.moveTo(e.pageX, e.pageY).show();
		}
	}
};
