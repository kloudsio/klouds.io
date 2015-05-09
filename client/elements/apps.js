var apps = require('./templates/apps.hbs');

var component = {
  init: function () {

  },
  render: function (params) {

    return apps(params);
  }
}

module.exports = component;
