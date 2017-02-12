var uuid = require('node-uuid');
var moment = require('moment');

export var searchTextReducers = (state= '', action) =>{
  switch(action.type){
    case 'SET_SEARCH_TEXT' :
      return action.searchText;

    default:
      return state;
  }
}



export var showCompletedReducer = (state = false, action) =>{
  switch(action.type){
    case 'TOGGLE_SHOW_COMPLETED' :
      return !state;

    default:
      return state;
  }
}

export var todoReducer = (state = [], action ) => {
  switch(action.type){
    case 'ADD_TODO':
    return [
      ...state,
      {
        id:uuid(),
        text:action.text,
        completed:false,
        createdAt:moment().unix(),
        completedAt:undefined
      }
    ];
    case 'TOGGLE_TODO':
      return state.map((todo)=>{
        var nextCompleted;
          if(todo.id === action.id){
            nextCompleted = !todo.completed;

          return {
            ...todo,
            completed:nextCompleted,
            completedAt:nextCompleted?moment().unix():undefined
          };
        }else {
          return todo;
        }
      });
    case 'ADD_TODOS':
      return [
        ...state,
        ...action.todos
      ];
    default:
      return state;
  }
};


// export var searchTextReducers = (state= '', action) =>{
//   switch(action.type){
//     case 'SET_SEARCH_TEXT' :
//       return action.searchText;
//
//     default:
//       return state;
//   }
// }
