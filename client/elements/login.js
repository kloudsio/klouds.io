import { element } from 'segmentio/deku';


function login(e, component, setState) {
  e.preventDefault();
  component.props.onLogin(component.data(), setState);
}

function register(e, component, setState) {
  e.preventDefault();
  component.props.onRegister(component.data(), setState);
}

export default {
  initialState() {
    return {
      authed: false,
      text: ''
    }
  },

  render(component) {
    let { props, state } = component;

    function checkwin(e) {
      if (e.target.value.toLowerCase() == "loud") {
        document.body.style.transform = "rotate(9deg)";
      } else {
        document.body.style.transform = "";
      }
    }

    if (state.authed) {
      return (<div>
        Humbly Presenting...
        K<input onKeyUp={checkwin} style="padding: none; border-top: none; border-left: none; border-right: none; width:4em" type='text' / >s.io!
      </div>)
    }

    return (
      <form class="login">
      	<input type="email" placeholder="email" />
  			<input type="password" placeholder="password" />
  			<button onClick={login}>Login</button>
        <button onClick={register}>Register</button>
        { state.authed ? "You are Logged In" : "" }
        { state.text }
      </form>
    );
  },

  afterRender(component, el) {
    let { props, state } = component;


    component.data = function() {
      let email = el.querySelector('input[type=email]');
      let password = el.querySelector('input[type=password]');

      return {
        email: email.value,
        password: password.value
      };
    }
  }
}
