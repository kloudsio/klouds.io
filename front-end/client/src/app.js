var zepto = require('zepto');
var _ = require('lodash');

var conf = require('../config.js');

Component = {};
Component.dashboard = require('./components/dashboard');
Component.layout = require('./components/layout');
Component.stripe = require('./components/stripe');
Component.grid = require('./components/grid');

Component.dashboard.init();
Component.layout.init();
Component.stripe.init();
Component.grid.init();


var describe = require('./descriptive.yaml');
var r = _(describe).mapValues(function (v, k) {
  return function (options) {
    return Component[k].render(_.defaults(options, v));
  };
}).value();

var html = r.layout({
  body: r.dashboard({}) + r.grid({})
})

$(function () {
  $('body').append(html);
});
