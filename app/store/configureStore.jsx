export var configure=()=>{
  
//Reducer combiner
var reducer=Redux.combineReducers({
  name:nameReducer,
  hobbies:hobbieReducer,
  movies:movieReducer,
  map:mapReducer
});

//store
var store = Redux.createStore(reducer,Redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

}
