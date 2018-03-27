var Redux = require('redux');
var axios=require('axios');

console.log('start Learning redux');

var actions = require('./actions/index');
var store= require('./store/configureStore').configure();

//subscribe to changes
var unsubscribe=store.subscribe(()=>{
  var state= store.getState();
//   document.getElementById('app').innerHTML=state.name;
   console.log("state is",state);

   if(state.map.isFetching){
     document.getElementById('app').innerHTML="Loading";
   }
   else if(state.map.url){
     document.getElementById('app').innerHTML='<a href="' + state.map.url + '" target="_blank">View your Location</a>';
   }
});
//unsubscribe();

var currentstate= store.getState();
console.log("current state is",currentstate);
fetchLocation();
//dispatching items to store
// store.dispatch(changeName('jhon'));
// store.dispatch(addHobby("Swimming"));
// store.dispatch(changeName('Rams'));
// store.dispatch(addMovie('Inception','thriller'));
// store.dispatch(addMovie('Game Of thrones','Fiction'));
// store.dispatch(removeMovie(1));
// store.dispatch(removeHobby(1));
