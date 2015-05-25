let superagent = require('visionmedia/superagent')
let _ = require('lodash/lodash')

function thenz(endable) { 
  let deferred = Promise.defer();    
  let cb = (err, data) => err !== null ? deferred.reject(err) : deferred.resolve(data)
  endable.end(cb);
  return deferred;
}


export let user = {
  login(data) {
    return thenz(superagent.post('/user/login').accept('json').send(data));
  },
  register(data) {
    return thenz(superagent.post('/user/create').accept('json').send(data));
  }
}
//    	this.qwest.headers = {
//			Authorization: 'Bearer ' + token
//		};