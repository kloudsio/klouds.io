let superagent = require('visionmedia/superagent')
let _ = require('lodash/lodash')


/*
  These are Thunks.

  function fooThunk( ... ) { 
    ...
    
    return function (cb) { ... }  
  }
*/


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
  purchase() {
    return function(cb) {
      return superagent.get('/apps').type('json').accept('json').end(cb);
    }    
  }
}