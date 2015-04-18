var _ = require('lodash');
var conf = require('../config.js');
var structure = require('./app.yaml');

var components = {};

components['dashboard'] = require('./components/dashboard');
components['layout'] = require('./components/layout');


function build(x) {

  _.forEach(x, function (k, v) {
    if (typeof v === 'object' && typeof v.component === 'string') {
      v = components[v.component](v);
    }
  });
  return components['layout'](x);
}

var html = build(structure);

document.addEventListener("DOMContentLoaded", function () {
  document.body.innerHTML = html;
});
