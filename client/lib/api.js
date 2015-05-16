import superagent from 'visionmedia/superagent';
import transforms from './transforms.js';
import state from './state.js';

var api = {
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
    .set('Accept', 'application/json')
    .end((err, res) => { err !== null ? p.reject(err) : p.resolve(res) });


  return p.then((res) => {
    transforms.login(res);
  });
}

function register(data) {
  let p = Promise.defer();

  superagent.post('/user/create').send(data)
    .set('Accept', 'application/json')
    .end((err, res) => { err !== null ? p.reject(err) : p.resolve(res) });

  return p.then(login);
}

export default api;
