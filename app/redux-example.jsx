var Redux = require('redux');

console.log('start Learning redux');

//name reducer and action generators
var nameReducer=(state='anonymous',action)=>{
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
    return state;

  }
};
var changeName= (name)=>{
  return {
    type:'CHANGE_NAME',
    name
  };
};

//hobby reducer and action generators
var hobbyId=1;
var hobbieReducer=(state=[],action)=>{
  switch (action.type) {
    case 'ADD_HOBBY':
      return [...state,
          {id:hobbyId++,hobby:action.hobby}];
    case 'REMOVE_HOBBY':
      return state.filter((hobby)=>action.id!==hobby.id);
    default:
    return state;
  }
};

var addHobby=(hobby)=>{
  return {
    type:"ADD_HOBBY",
    hobby
  };
};
var removeHobby=(id)=>{
  return {
    type:"REMOVE_HOBBY",
    id
  };
};

//movie reducers and action generators
var movieId=1;
var movieReducer=(state=[],action)=>{
  switch (action.type) {
    case 'ADD_MOVIE':
      return[...state,{id:movieId++,title:action.title,gener:action.gener}];
    case 'REMOVE_MOVIE':
      return state.filter((movie)=>action.id!==movie.id);

      default:
      return state;

  }
};
var addMovie=(title,gener)=>{
  return {
    type:"ADD_MOVIE",
    title,
    gener
  };
};
var removeMovie=(id)=>{
  return{
    type:"REMOVE_MOVIE",
    id
  };
};


//Reducer combiner
var reducer=Redux.combineReducers({
  name:nameReducer,
  hobbies:hobbieReducer,
  movies:movieReducer
});


//store
var store = Redux.createStore(reducer,Redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

//subscribe to changes
var unsubscribe=store.subscribe(()=>{
  var state= store.getState();
   document.getElementById('app').innerHTML=state.name;
   console.log("state is",state);
});
//unsubscribe();

var currentstate= store.getState();
console.log("current state is",currentstate);

//dispatching items to store
store.dispatch(changeName('jhon'));
store.dispatch(addHobby("Swimming"));
store.dispatch(changeName('Rams'));
store.dispatch(addMovie('Inception','thriller'));
store.dispatch(addMovie('Game Of thrones','Fiction'));
store.dispatch(removeMovie(1));
store.dispatch(removeHobby(1));
