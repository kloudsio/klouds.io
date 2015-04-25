
var koa = require('koa');

module.exports = function* () {


  // KOA
  var app = koa();

  yield this.initialized();

  console.log('initialized');
}
