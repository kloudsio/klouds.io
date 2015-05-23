import s from './state.js';

let superagent = require('visionmedia/superagent');


export let api = {
  user: {
    register: register,
    login: login,
  },

  subscription: {
    create: null,
    delete: null,
  }
};


function login(data) {
  let p = Promise.defer();
  superagent.post('/user/login').send(data)
  .accept('json')
  .end((err, res) => { err !== null ? p.reject(err) : p.resolve(res) });

  return p;
}

function register(data) {
  let p = Promise.defer();

  superagent.post('/user/create').send(data)
    .accept('json')
    .end((err, res) => { err !== null ? p.reject(err) : p.resolve(res) });

  return p;  
}

