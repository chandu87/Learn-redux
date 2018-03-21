var Redux = require('redux');

console.log('start Learning redux');
var stateDefault = {
    name :'anonymous',
    hobbies:[],
    movies:[]
    };
var hobbyId=1;
var movieId=1;
// var oldreducer=(state = stateDefault,action)=>{
//   switch(action.type){
//     case "CHANGE_NAME":
//     return{...state, name:action.name};
//     case "ADD_HOBBY":
//     return{...state,
//           hobbies:[...state.hobbies,{ id: hobbyId++, hobby:action.hobby}]
//         };
//     case "ADD_MOVIE":
//     return{...state,
//           movies:[...state.movies,{id:movieId++,title:action.title,gener:action.gener}]
//         };
//     case "REMOVE_HOBBY":
//     return{...state,hobbies:state.hobbies.filter((hobby)=>hobby.id!==action.id)
//         };
//     case "REMOVE_MOVIE":
//     return{...state,
//       movies:state.movies.filter((movie)=>movie.id!==action.id)
//     };
//     default:
//     return state;
//   }
// };
var nameReducer=(state='anonymous',action)=>{
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
    return state;

  }
};
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

var reducer=Redux.combineReducers({
  name:nameReducer,
  hobbies:hobbieReducer,
  movies:movieReducer
});

var store = Redux.createStore(reducer,Redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

//subscribe to changes
var unsubscribe=store.subscribe(()=>{
  var state= store.getState();
  // console.log('Name is ',state.name);
   document.getElementById('app').innerHTML=state.name;
   console.log("state is",state);
});
//unsubscribe();

var currentstate= store.getState();
console.log("current state is",currentstate.name);
store.dispatch({
  type:"CHANGE_NAME",
  name:"jhon"
});
store.dispatch({
  type:"ADD_HOBBY",
  hobby:"Swimming"
});
store.dispatch({
  type:"CHANGE_NAME",
  name:"Rams"
});
store.dispatch({
  type:"ADD_MOVIE",
  title:"Inception",
  gener:"Thriller"
});
store.dispatch({
  type:"ADD_MOVIE",
  title:"Game Of thrones",
  gener:"Fiction"
});
store.dispatch({
  type:"REMOVE_MOVIE",
  id:1
});
store.dispatch({
  type:"REMOVE_HOBBY",
  id:1
});
