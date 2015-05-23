/** @jsx element */
import { element } from 'segmentio/deku';
import { user } from '../lib/api.js';


export let Login = {
  render(component) {
    let { el, props, state } = component

    component.data = () => {
      return {
        email: el.querySelector('input[type=email]').value,
        password: el.querySelector('input[type=password]').value,
      };
    }

    return (
    	<div class="login">
  			<input type="email" placeholder="email"/>
  			<input type="password" placeholder="password"/>
  			<button onClick={props.login} type="button" name="login">Login</button>
  			<button onClick={props.register} type="button" name="register">Register</button>
      </div>);
  },
}
