var Element = require('../lib/element.js');
var template = require('./templates/layout.hbs');

class Layout extends Element {
  constructor() {
    super();
    this.set('title', () => 'MicroGrid');
    this.set('body', () => 'La Bedy');
  }

  render(state) {
    console.log('MicroGrid!');
    return template(state);
  }
}

module.exports = Layout;
