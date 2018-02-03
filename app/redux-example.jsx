var Redux = require('redux');

console.log('start Learning redux');

var reducer=(state = {name :'anonymous'},action)=>{
  return state;
};

var store = Redux.createStore(reducer);

var currentState = store.getState();

console.log('currentState : ',currentState);
