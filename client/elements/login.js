/** @jsx element */
import { element } from 'segmentio/deku';
import { user } from '../lib/api.js';


export let Login = {
  
  
  initialState() {
    return {
      authed: false,
      text: ''
    }
  },

  render(component) {
    let { props, state } = component;

    function login (e, component, setState) {
      component.props.onLogin(component.data(), setState);
    }

    function register (e, component, setState) {
      component.props.onRegister(component.data(), setState);
    }
 
    return (      
      <div class="login">
      	<input type="email" placeholder="email"/>
  			<input type="password" placeholder="password"/>
  			<button onClick={login}>Login</button>
        <button onClick={register}>Register</button>
        { state.authed ? "You are Logged In" : "" }
        { state.text }
      </div>
    );
  },
  
  afterRender(component, el) {
    let { props, state } = component;
    
    let email = el.querySelector('input[type=email]');
    let password = el.querySelector('input[type=password]');

    component.data = function() {
      return {
        email: email.value, 
        password: password.value
      };
    }
  }
}
