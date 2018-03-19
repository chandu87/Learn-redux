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
var store = redux.createStore(reducer,redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f=>f
));

store.subscribe(()=>{
  var state= store.getState();
  //console.log("Searh text is ",state.searchText);
  document.getElementById('app').innerHTML=state.searchText;;
});
//console.log('currentState',store.getState());

store.dispatch({
  type:"SEARCHTEXT",
  searchText:"jadasda"
});

store.dispatch({
  type:"SEARCHTEXT",
  searchText:"janavule"
});
