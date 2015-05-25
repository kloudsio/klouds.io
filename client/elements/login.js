/** @jsx element */
import { element } from 'segmentio/deku';
import { user } from '../lib/api.js';


export let Login = {
  render(component) {
    let { props, state } = component;    

    function email(component) {
      return component.el.querySelector('input[type=email]').value;
    }    

    function password(component) {
      return component.el.querySelector('input[type=password]').value;
    }


    return (      
      <div class="login">  		
      	<input type="email" placeholder="email" />
  			<input type="password" placeholder="password" />
  			
        <button onClick={props.onLogin} type="button" name="login">Login</button>
  			<button onClick={props.onRegister} type="button" name="register">Register</button>      
      </div>
    );
  },
  
  afterRender(component) {
    let { el, props, state } = component;
  }
}
