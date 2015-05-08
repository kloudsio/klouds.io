var koa = require('koa');
var kjson = require('koa-json');
var kjsonb = require('koa-json-body');
var serve = require('koa-static');
var mount = require('koa-mount');

var _ = require('lodash');
var co = require('co');
var pathJoin = require('path').join;

var util = require('./util');


var app = koa();
var log = util.logma('main');

/**
 * Load the Modules, Compose & Run the Application
 */
function* start(config) {

  assets(config);

  var apps = yield segments(config);


  _.forEach(apps, function (v, url) {
    log.log('mounted ', url);
    app.use(mount(url, v));
  });

  log.log(`binding server to port ${config('port')}`);
  app.listen(config('port'));
}

/**
 * Serve Static Assets
 */
function assets(config) {
  var assets = config('assets');
  _.forEach(assets, function (path, key) {
    log.log('serving static files at ' + path);
    app.use(serve(path, {
      defer: true
    }));
  });
}

/**
 * Load Modules
 */
function* segments(config) {
  var modules = config('modules');
  var apps = {};

  yield _.mapValues(modules, function (dir, url) {
    var mountable = apps[url] = koa();

    mountable.use(configify(config));
    mountable.use(logmify(url));

    return require(pathJoin('../', dir)).apply(mountable);
  });

  return apps;
}

/**
 * Logma Middleware
 */
function logmify(url) {
  return function* (next) {
    _.assign(this, util.logma(url));
    this.info(this.request.url);
    yield next;
  }
}

/**
 * Config Middleware
 */
function configify(config) {
  return function* (next) {
    this.config = config;
    yield next;
  }
}

module.exports = co.wrap(start);
