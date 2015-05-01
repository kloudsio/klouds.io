var _ = require('lodash');
var d3 = require('d3');

var Login = require('./components/login');

var Component = {};
Component.layout = require('./components/layout');
Component.apps = require('./components/apps');

Component.layout.init();
Component.apps.init();


var describe = require('./descriptive.yaml');
var r = _(describe).mapValues(function (v, k) {
  return function (options) {
    if (typeof Component[k] !== 'function' && typeof Component[k].render === 'function') {

    }
    return Component[k].render(_.defaults(options, v));
  };
}).value();

var layout = r.layout({
  body: '',
})

var body = d3.select('#app');
body.html(layout);

var page = d3.select('div.page')
var login = new Login(page);
login.mount();
