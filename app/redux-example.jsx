var Redux = require('redux');

console.log('start Learning redux');

var reducer=(state = {name :'anonymous'},action)=>{
  switch(action.type){
    case "CHANGE_NAME":
    return{...state, name:action.name};
    default:
    return state;
  }
};

var store = Redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState : ',currentState);

store.dispatch({
  type:"CHANGE_NAME",
  name:"jhon"
});


console.log('Name should be jhon',store.getState());
