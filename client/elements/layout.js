/** @jsx element */
import { element } from 'segmentio/deku'

export let Layout = {
  render(component) {
    let {props, state} = component;
    return <div class="page">{props.children}</div>;
  }
};
