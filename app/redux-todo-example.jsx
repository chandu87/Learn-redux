var redux = require('redux');

console.log('redux todo example');

var stateDefault= {
  searchText:"jame",
  showCompleted:false,
  todos:[]
};
var reducer = (state=stateDefault,action)=>{
 return state;
};
var store = redux.createStore(reducer);

console.log('currentState',store.getState());
