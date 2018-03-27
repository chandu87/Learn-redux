export var nameReducer=(state='anonymous',action)=>{
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
    return state;

  }
};

var hobbyId=1;
export var hobbieReducer=(state=[],action)=>{
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

var movieId=1;
export var movieReducer=(state=[],action)=>{
  switch (action.type) {
    case 'ADD_MOVIE':
      return[...state,{id:movieId++,title:action.title,gener:action.gener}];
    case 'REMOVE_MOVIE':
      return state.filter((movie)=>action.id!==movie.id);

      default:
      return state;

  }
};

export var mapReducer = (state={isFetching:false,url:undefined},action)=>{
  switch(action.type){
    case 'START_LOCATION_FETCH':
    return{
      isFetching:true,
      url:undefined
    }
    case 'COMPLETE_LOCATION_FETCH':
    return{
      isFetching: false,
      url: action.url
    }
    default:
    return state;
  }
};
