var Redux = require('redux');
var thunk = require('redux-thunk').default;
var {nameReducer, hobbieReducer, movieReducer, mapReducer}=require('./../reducers/index');
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
  Redux.applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));
return store;
}
