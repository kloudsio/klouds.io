import { element } from 'segmentio/deku';


function onRegister(ev, c, setState) {
  let { props, email, password } = c;  

  var user = props.sendRegister({
    email: email.value,
    password: password.value
  });

  props.setUser(user);
}

function onLogin(ev, c, setState) {
  let { props, email, password } = c;

  var user = props.sendLogin({
    email: email.value,
    password: password.value
  });

  props.setUser(user);
}


const name = 'Login';

const propTypes = {
  sendLogin: {
    source: 'sendLogin'
  },
  sendRegister: {
    source: 'sendRegister'
  },
  setUser: {
    source: 'setUser'
  }
};

function initialState (props) {
  return {    
    virgin: true,
    valid: true,
    errors: {},
  }
}


function taint() {
  setState({ virgin: false });
  
  if (state.valid) {
    return;
  }
}

function validate(ev, component, setState) {  
  let { email, password, state, props } = component;
  
  if (state.virgin)
    return;

  let valid = true;
  let errors = {};

  if (!email.value.match(/\S+@\S+/)) {
    valid = false;
    errors.email = true;
  }

  if (password.value.length <= 5) {
    valid = false;
    errors.password = true;
  }

  setState({
    errors: errors,
    valid: valid,
  })
}


function render(component, setState) {
  let { props, state } = component;

  return <div class="row middle-xs">
      <div class="col-xs-2">
        <span class="num">1</span>
      </div>
      <div class="col-xs-10 middle-xs">
        <h2>Klouds Account</h2>
      </div>
      <div class="row middle-xs">
        <form class="offset-xs-2 login item">
          <div>
            <label>Email { state.virgin ? "" : (state.errors.email ? "<\/3" : "<3") }</label>
          	<input onInput={ validate } type="email" placeholder="Email" />
    			</div>
          <div>
            <label>Password { state.virgin ? "" : (state.errors.password ? "<\/3" : "<3") }</label>
            <input onInput={ validate } type="password" placeholder="Password" /> 
          </div>
          <div>
            <button type="button" disabled={ !state.valid } onClick={ onRegister } class="secondary">Register</button>
            <button type="button" disabled={ !state.valid } onClick={ onLogin }>Login</button>
          </div>
        </form>
      </div>
    </div>
}

function afterRender(component, el) {
  component.email = el.querySelector('input[type=email]');
  component.password = el.querySelector('input[type=password]');
}

export default { name, propTypes, initialState, render, afterRender }