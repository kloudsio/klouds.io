/** @jsx element */
import { element } from 'segmentio/deku'

export let Page = {
  render(component) {
    let {props, state} = component;
    return <div class="page">{props.children}</div>;
  }
};
