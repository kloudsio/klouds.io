var d3 = require('mbostock/d3');
var _ = require('lodash/lodash');

class Element {

  constructor() {
    this._state = {};
  }


  /**
   * BEHAVIOR
   **/

  create(container) {
    this.container = container;
    this._create();
  }

  _create() {
    console.log('_create');
    d3.select(this.container).html(this._render());
  }

  beforeCreate(x) {
    this._create = _.flow(x, this._create);
  }

  afterCreate(x) {
    this._create = _.flow(this._create, x);
  }

  //
  // destroy() {
  //
  // }
  //
  // onDestroy(fn) {
  //   this.destroy = _.flowRight(fn, this.destroy);
  // }

  eventify(name, selector, action) {
    this.on(() => {
      this.select(selector).on(action, ev => this.emit(name, ev))
    }).off(() => {
      this.select(selector).on(action, null);
    });
  }

  set(x, y) {
    this._state[x] = () => y;
  }

  mount(x, y) {
    this._state[x] = y._render.bind(y);
  }

  _render() {
    var final = _.mapValues(this._state, function (v) {
      return v();
    });

    return this.render(final);
  }

  select(...q) {
    return q.map(d3.select);
  }
}

module.exports = Element;
