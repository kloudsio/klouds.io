var template = require('./dashboard.ejs');

var component = {
  init: function (params) {

  },
  render: function (params) {
    return template(params);
  }
}

module.exports = component;
