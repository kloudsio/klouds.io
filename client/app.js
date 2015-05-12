/** @jsx element */
import {tree,render,element} from 'segmentio/deku';


// Create a component
var HelloWorld = {
  render({ props, state }) {
    return (
      <div>{props.children}</div>
    )
  }
}

// Create a tree
var app = tree(<HelloWorld>Hello World</HelloWorld>)

// document.addEventListener('DOMContentLoaded', function () {
	// Render the tree to the DOM
	render(app, document.querySelector('main'))
// });
