// var qwest = require('pyrsmk/qwest:qwest.min.js');

var model = require('component/model');
var superagent = require('visionmedia/superagent');
var supercouch = require('qualiancy/supercouch');

var transforms = require('/transforms.js');
var state = require('/state.js');

var apiSpec = {
  user: {
    register: register,
    login: login,
  },

  subscription: {
    create: null,
    delete: null,
  }
};

function* login(data) {
  var res = yield superagent
    .post('/user/login')
    .send(data)
    .set('Accept', 'application.json')
    .end();
  transforms.login(res);
  return res;
}

function* register(data) {
  var res = yield superagent
    .post('/user/create')
    .send(data)
    .set('Accept', 'application.json')
    .end();
  if (!res)
    return false;
  return yield login(data);
}

module.exports = apiSpec;
