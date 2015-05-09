var d3 = require('mbostock/d3');

class Element {
  constructor(selection) {
    this.select = d3.select(selection);
  }
}

module.exports = Element;
