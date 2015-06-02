import { element } from 'segmentio/deku';
let aload = require('pazguille/aload');

let stripe = null;
let token = null;



export default {
    propTypes: {
      stripe_pk: {
        source: 'stripe_pk'
      },
      options: {
          source: 'showStripe'
      }
    },
    render(component, setState) {
      let { props, state } = component;

      let stripeResponseHandler = function (status, response) {
        if (response.error) {
          setState( {errors: response.error.message, busy: false } );
        } else if (status != 200) {
          setState( {errors: 'Network Error', busy: false } );
        } else {
          var token = response.id;
          console.log(props.options);
          setState({ busy: false });
          props.onToken(props.options.item._id, token);
        }
      }

      let processCard = function(event) {
        setState({busy: true});

        let data = {
          number: document.getElementById('card-number').value,
          cvc: document.getElementById('card-cvc').value,
          exp_month: document.getElementById('card-expiry-month').value,
          exp_year: document.getElementById('card-expiry-year').value
        };

        Stripe.card.createToken(data, stripeResponseHandler);
      }

      if (!props.options) {
        return <div></div>;
      }

      let rickRoll = function() {
        setTimeout(function() {
          window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        }, 2000);
        setTimeout(function() {
          alert('<3 *waves goodbye*');
        }, 1000);
        alert('Have fun :)');
      }

      var buttonClass = { 'stripe-busy': state.busy };
      return (
        <div class="backdrop">
          <form class="stripe-form modal" method="POST" id="payment-form">
            <span class="title">{props.options.item.name}</span>
            <span class="info">{`\$${props.options.amount} / Month App Deployment`}</span>
            <span class="stripe-errors">{state.errors}</span>

            <label>{"Card Number"}</label>
            <input placeholder="credit card #" type="text" size="20" id="card-number" />

            <label>CVC</label>
            <input placeholder="" type="text" size="4" id="card-cvc"/>

            <label>Expiration (MM/YYYY)</label>
            <div>
              <input placeholder="MM" class="expiry" type="text" size="2" id="card-expiry-month"/>
              <span>/</span>
              <input placeholder="YYYY" class="expiry" type="text" size="4" id="card-expiry-year"/>
             </div>
             <button class={buttonClass} onClick={processCard}  type="button">{`Get Your App!`}</button>
             <button class={buttonClass} style="color: grey" onClick={rickRoll} type="button">Get Rick Rolled</button>
          </form>
        </div>
        );
    }
}