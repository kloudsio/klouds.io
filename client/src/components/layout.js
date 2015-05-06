var template = require('/templates/layout.hbs');
var Component = require('/component');

class Layout extends Component {
  constructor(selection) {
    super(selection);
  }

  render() {
    return template({
      title: '',
      body: ''
    });
  }

  mount() {
    this.select.html(this.render());
  }

  unmount() {}
}

module.exports = Layout;
