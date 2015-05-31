import { element } from 'segmentio/deku';
let aload = require('pazguille/aload');

let stripe = null;
let token = null;
let pk = null;



export default {
    propTypes: {
        stripe_pk: {
            source: 'stripe_pk'
        }
    },

    render(component) {
        let { props, state } = component;
        pk = props.stripe_pk;

        return (<script type="text/javascript" src="https://js.stripe.com/v2/"></script>)
    },

    afterRender(component, el)  {
        el.onload = function configureStripe() {
          Stripe.setPublishableKey('YOUR_PUBLISHABLE_KEY');
          Stripe.stripe = StripeCheckout.configure({
              key: pk,
              token: function onToken(_token) {
                  token = _token;
              }
          });
          console.dir(Stripe);
        };
        aload(el);
    },

    open() {
      console.dir(stripe);
    }
}