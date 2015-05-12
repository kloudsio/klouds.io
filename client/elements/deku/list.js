export let propTypes = {
  'item': {
    'type': 'object'
  },
  'remove': {
    source: 'removeTodo'
  }
}

export function render(component) {
  let {
    props, state
  } = component
  let {
    item, remove
  } = props

  function onRemove() {
    remove(item)
  }

  return (
    <div class="Todo">
      {item.text}
      <span onClick={onRemove}>Remove</span>
    </div>
  )
}

//app.js

import List from './list'

// Optionally set prop types that will validate
// whenever props are changed
export let propTypes = {
  items: {
    type: 'array'
  }
}

// Render the list
export function render(component) {
  let {
    props, state
  } = component

  return (
    <div class="App">
      <h1>My Todos</h1>
      <List items={props.items} />
    </div>
  )
}


// todo.js