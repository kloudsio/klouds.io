
var main = require('../lib/main.js');
var config = require('../config.js');

/*
  DB
*/
var monk = require('monk');
var wrap = require('co-monk');

function* userStore(next) {
  this.db = monk(config('mongodb'));
  this.users = wrap(this.db.get('users'));
  yield next;
}

/*
  Route
*/
var routes = require('./routes');
var router = require('koa-joi-router')();
router.route(routes.create);
router.route(routes.login);

/*
  App
*/
var app = main.create('Users');
app.use(userStore);
app.use(router.middleware());
main.mount('/user', app);