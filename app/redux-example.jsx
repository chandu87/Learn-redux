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


var store = Redux.createStore(reducer,Redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));



//subscribe to changes
var unsubscribe=store.subscribe(()=>{
  var state= store.getState();

  console.log('Name is ',state.name);
   document.getElementById('app').innerHTML=state.name;
});
//unsubscribe();


var currentstate= store.getState();
console.log("current state is",currentstate.name);
store.dispatch({
  type:"CHANGE_NAME",
  name:"jhon"
});

store.dispatch({
  type:"CHANGE_NAME",
  name:"Rams"
});
