let superagent = require('visionmedia/superagent')
let _ = require('lodash/lodash')


/*
  These are Thunks.

  function fooThunk( ... ) { 
    ...
    
    return function (cb) { ... }  
  }
*/
let authed = function() {};

export let auth = function (token) {
  console.log('Setting Auth Header', token);
  authed = function(request) { 
    request.set('Authorization', `Bearer ${token}`); 
    return request;
  }
}

export let user = {
  
  login(data) {
    return function(cb) {
    	superagent.post('/user/login').type('json').accept('json').send(data).end(cb);
    }
  },

  register(data) {
    return function(cb) {
      return superagent.post('/user/create').type('json').accept('json').send(data).end(cb);
    }
  }
}

export let apps = {
	get() {		
    return function(cb) {
	    return superagent.get('/apps').type('json').accept('json').end(cb);
    }
	},
  purchase(data) {
    return function(cb) {
      return authed(superagent.post('/payment')).type('json').accept('json').send(data).end(cb);
    }    
  }
}