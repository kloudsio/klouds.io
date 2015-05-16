/** @jsx element */
import { element } from 'segmentio/deku';
import { user } from '/lib/api.js';


export let Login = {
  render(component) {
    let { props, state } = component;

    function onLogin() {
      user.login(component.getData()).then((res) => {
        console.log(`User Login: ${JSON.stringify(res, false, 2)}`);
      });
    }

    function onRegister() {
      user.register(component.getData()).then((res) => {
        console.log(`User Register: ${JSON.stringify(res, false, 2)}`);
      });
    }

    return (
      <div class="dashboard row">
      	<div class="box">
    			<input type="email" />
    			<input type="password" />
    			<button onClick={onLogin} type="button" name="login">Login</button>
    			<button onClick={onRegister} type="button" name="register">Register</button>
      	</div>
      </div>);
  },

  afterRender(component, el) {
    component.getData = () => {
      return {
        email: el.querySelector('input[type=email]').value,
        password: el.querySelector('input[type=password]').value,
      };
    }
  }
}
