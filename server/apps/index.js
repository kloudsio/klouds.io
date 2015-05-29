var _ = require('lodash');
var jrouter = require('koa-joi-router')
var Joi = require('joi');

var monk = require('monk');
var wrap = require('co-monk');


module.exports = function* (app, context) {
  app.use(function* (next) {  
    this.db = monk(this.config('db'));
    this.apps = wrap(this.db.get('apps'));
    yield next;
  });

  var router = jrouter();
  
  router.route({
    method: 'get',
    path: '/',
    handler: function* () {    
      var apps = yield this.apps.find({});
      this.status = 200;
      this.body = {
        apps: apps
      }

      return;
    }
  });

  app.use(router.middleware());
}

