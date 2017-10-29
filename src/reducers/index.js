// import { combineReducers } from 'redux'
// import todos from './todos'
// import visibilityFilter from './visibilityFilter'
//
// const todoApp = combineReducers({
//   todos,
//   visibilityFilter
// })
//
// export default todoApp

const start = [
   {
      id: 100,
      date: "1/1",
      importance: "1",
      title: "111",
      nextAction: "Go 1",
      details: "More about 1",
      completed: false
   },
   {
      id: 101,
      date: "2/1",
      importance: "2",
      title: "dog",
      nextAction: "Walk around the block",
      details: "no more details for now",
      completed: false
   },
   {
      id: 102,
      date: "3/1",
      importance: "3",
      title: "programming",
      nextAction: "prepare another react-redux app",
      details:"no more details for now. jjjjjjjjjjjkkkkkk 123333333333333333 jjjjjjjjj",
      completed: false
   }
]

const notifications = (state = start, action) => {
   switch (action.type) {
      case 'ADD_NOTIFICATION':
         return [
           ...state,
           {
             id: action.id,
             date: "",
             importance: "",
             title: "",
             nextAction: "",
             details: "",
             completed: false
           }
         ]
      case 'NOTIFICATION_DELETE':
         return state.filter((object)=>object.id!=action.id);
      case 'TOGGLE_COMPLETE':
         return state.map( notification =>
            (notification.id === action.id)? {...notification, completed: !notification.completed}
             : notification
         )
      case 'REFRESH_TABLE':
         return [...state].sort( (not0, not1) => not0.completed-not1.completed )
      case 'EDIT'


    default:
      return state
  }
}

export default notifications
