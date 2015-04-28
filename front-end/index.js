var koa = require('koa');
var kstatic = require('koa-static');

module.exports = function* (app) {
  app.use(kstatic(__dirname + '/client/static'));
  return app;
}
