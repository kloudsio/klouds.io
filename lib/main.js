var koa         = require('koa');
var kjson       = require('koa-json');
var kjsonb      = require('koa-json-body');
var serve       = require('koa-static');
var mount       = require('koa-mount');
var _           = require('lodash');
var co          = require('co');
var pathJoin    = require('path').join;
var util        = require('./util');


module.exports.start = co.wrap(function* (config) {
  var app       = koa();
  var log       = util.logma('main');
  var modules   = config('modules');
  var assets    = config('assets');

  // Serve Assets

  _.forEach(assets, function (path, key) {
    log.log('serving static files at' + path);
    app.use(serve(path, {
      defer: true
    }));
  });

  var apps = {};

  yield _.mapValues(modules, function (dir, url) {
    var mountable = apps[url] = koa();

    mountable.use(function* (next) {
      this.config = config;
      _.assign(this, util.logma(url));
      this.info(this.request.url);
      yield next;
    });

    return require(pathJoin('../', dir)).apply(mountable);
  });

  log.log('initialized modules');

  _.forEach(apps, function (v, url) {
    log.log('mounted ', url);
    app.use(mount(url, v));
  });

  log.log("binding server to port ${config('port')}");
  app.listen(config('port'));
});
