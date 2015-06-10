var _ = require('lodash');


var main = require('../lib/main.js');
var route = require('koa-route');


/*
  DB
*/
var monk = require('monk');
var wrap = require('co-monk');

function* appStore(next) {
  this.db = monk(process.env.MONGODB);
  this.apps = wrap(this.db.get('apps'));
  yield next;
}

/*
  Route
*/
function* getApps() {
  var apps = yield this.apps.find({});
  this.body = { apps: apps }
}

/*
  App
*/
var app = main.create('Apps');

app.use(appStore);

app.use(route.get('/', getApps));

main.mount('/app', app);