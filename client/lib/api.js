let superagent = require('visionmedia/superagent')
let _ = require('lodash/lodash')


export let user = {
  login(data) {
    return function(cb) {
    	superagent.post('/user/login').type('json').accept('json').send(data).end(cb);
    }
  },
  register(data) {
    return superagent.post('/user/create').type('json').accept('json').send(data).end;
  }
}
//    	this.qwest.headers = {
//			Authorization: 'Bearer ' + token
//		};