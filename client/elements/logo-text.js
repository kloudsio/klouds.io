/** @jsx element */
import { element } from 'segmentio/deku';
var Tweenable = require('jeremyckahn/shifty:dist/shifty.min.js');

var tweenable = new Tweenable();


export let Layout = {
  render: ({ props, state }) => (
		<svg width="256" height="128" viewBox="0 0 256 128">
      <text transform="" x="0" y="0" width="100%" height="100%" paint-order="stroke">{props.children}</text>
    </svg>
	);

  afterRender(component, el) {
    component.text = el.querySelector('text')
    function outline() {
      tweenable.tween({
        from: { offset: 0 },
        to:   { offset: -1200 },
        duration: 1500,
        easing: 'easeInQuad',
        step: ({offset}) => {
          component.text.style.strokeDashoffset = offset;
        }
      });
    }
    outline();
  }
}
