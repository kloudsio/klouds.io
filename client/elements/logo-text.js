import { element } from 'segmentio/deku';

var Tweenable = require('jeremyckahn/shifty:dist/shifty.min.js');
var tweenable = new Tweenable();


function render(component) {
  let { props, state } = component;

  return <svg class="logo">
      <text>{props.children}</text>
    </svg>
}


function outline(el) {      
  tweenable.tween({
    from: { offset: 0 },
    to:   { offset: -1200 },
    duration: 1500,
    easing: 'easeInQuad',
    step: ({offset}) => {
      el.style.strokeDashoffset = offset;
    }
  });
}

function afterRender(component, el) {  
  outline(el.querySelector('text'));
}

export default { render, afterRender }
