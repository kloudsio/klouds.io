/** @jsx element */
import { element } from 'segmentio/deku@0.2.1'


export let Layout = {
  render(component) {
    let { props, state } = component
    return <div>{props.children}</div>
  }
}
