import { element } from 'segmentio/deku';

var Tweenable = require('jeremyckahn/shifty:dist/shifty.min.js');
var tweenable = new Tweenable();


export default {

  render(component) {
    let { props, state } = component;

    return (<svg class="logo" >
            <text transform="translate(0, 47) scale(3)">{props.children}</text>
           </svg>);
  },

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
