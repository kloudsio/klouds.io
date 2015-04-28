var koa = require('koa');
var kstatic = require('koa-static');
var path = require('path');

module.exports = function* (app) {
  app.use(kstatic(path.join(__dirname, 'client/static')));
  return app;
}
