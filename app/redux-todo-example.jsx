var redux = require('redux');

console.log('redux todo example');

var stateDefault= {
  searchText:"jame",
  showCompleted:false,
  todos:[]
};
var reducer = (state=stateDefault,action)=>{
 switch(action.type){
   case "SEARCHTEXT":
   return {...state,searchText:action.searchText};

   default:
   return state;
 }
};
var store = redux.createStore(reducer);

console.log('currentState',store.getState());

store.dispatch({
  type:"SEARCHTEXT",
  searchText:"jadasda"
});
console.log(store.getState());
