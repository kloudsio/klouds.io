// Define a name for the component that can be used in debugging
export let name = 'My Component'

// Get the initial state for the component. We don't pass props in here like 
// React does because the state should just be computed in the render function.
export function initialState (props) {
  return {
    open: true
  }
}

// Default props can be defined that will be used across all instances. 
export let defaultProps = {
  style: 'round' 
}

// This is called on both the server and the client.
//
// Client: Yes
// Server: Yes
export function beforeMount (component) {
  let {props, state, id} = component
}

// This is called on each update and can be used to skip renders to improve 
// performance of the component.
//
// Client: Yes
// Server: No
export function shouldUpdate (component, nextProps, nextState) {
  let {props, state, id} = component
  return true
}

// Called before each render on both the client and server.
//
// Example use cases:
// - Updating stream/emitter based on next props
//
// Client: Yes
// Server: Yes
export function beforeRender (component) {
  let {props, state, id} = component
}

// This isn't called on the first render only on updates. 
//
// Example use cases:
// - Updating stream/emitter based on next props
//
// Client: Yes
// Server: No
export function beforeUpdate (component, nextProps, nextState) {
  let {props, state, id} = component
}

// Render a component. We need to pass in setState so that callbacks on 
// sub-components. This may change in the future.
//
// Client: Yes
// Server: Yes
export function render (component, setState) {
  let {props, state, id} = component
  return <div></div>
}

// Called after every render, including the first one. This is better
// than the afterUpdate as it's called on the first render so if forces
// us to think in single renders instead of worrying about the lifecycle.
// It can't update state here because then you'd be changing state based on 
// the DOM.
// 
// Example use cases:
// - Update the DOM based on the latest state eg. animations, event handlers
//
// Client: Yes
// Server: No
export function afterRender (component, el) {
  let {props, state, id} = component
}

// Not called on the first render but on any update.
// 
// Example use cases:
// - Changing the state based on the previous state transition
// - Calling callbacks when a state change happens
//
// Client: Yes
// Server: No
export function afterUpdate (component, prevProps, prevState, setState) {
  let {props, state, id} = component
}

// This is called after the component is rendered the first time and is only
// ever called once.
//
// Use cases:
// - Analytics tracking
// - Loading initial data
// - Setting the state that should change immediately eg. open/close
// - Adding DOM event listeners on the window/document
// - Moving the element in the DOM. eg. to the root for dialogs
// - Focusing the element
//
// Client: Yes
// Server: No
export function afterMount (component, el, setState) {
  let {props, state, id} = component
}

// This is called once just before the element is removed. It should be used
// to clean up after the component.
// 
// Use cases:
// - Unbind window/document event handlers
// - Edit the DOM in anyway to clean up after the component
// - Unbind any event emitters
// - Disconnect streams
//
// Client: Yes
// Server: No
export function beforeUnmount (component, el) {
  let {props, state, id} = component
}