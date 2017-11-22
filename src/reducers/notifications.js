import moment from 'moment'


const start = [
   {
      id: 100,
      date: moment('2018-1-1'),
      importance: 1,
      title: "111",
      nextAction: "Go 1",
      details: "More about 1",
      completed: false
   },
   {
      id: 101,
      date: moment('2018-1-2'),
      importance: 2,
      title: "dog",
      nextAction: "Walk around the block",
      details: "no more details for now",
      completed: false
   },
   {
      id: 102,
      date: moment('2018-5-20'),
      importance: 3,
      title: "programming",
      nextAction: "prepare another react-redux app",
      details:"no more details for now. jjjjjjjjjjjkkkkkk 123333333333333333 jjjjjjjjj",
      completed: false
   },
   {
      id: 103,
      date: moment('2017-12-1'),
      importance: 4,
      title: "cat",
      nextAction: "Change the bucket",
      details: "no more details for now",
      completed: false
   },
   {
      id: 104,
      date: moment('2017-11-2'),
      importance: 4,
      title: "Facebook",
      nextAction: "Update my FB picture",
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
             importance: 3,
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
         return [...state].sort(
            (not1, not2) => not2.importance-not1.importance
         ).sort(
            (not1, not2) => not1.date-not2.date
         )

         .sort(
            (not0, not1) => not0.completed-not1.completed
         )
      case 'EDIT_FIELD':
         const {id, field, text}=action
            const newState = state.map( not => {
               if (not.id===id) {
                  return Object.assign({}, not, { [field]: text } )
               }
               return not
            })
            return newState
      case 'CHANGE_IMPORTANCE_VALUE':
         {
            const {id, newImportanceValue}=action
            const newState = state.map( not => {
               if (not.id!=id) {return not}
               else {
                  not.importance=newImportanceValue
                  return not
               }
            })
            return newState
         }
      case 'CHANGE_DATE':
      {
         const {id, newDate} = action
         const newState = [...state]
         const index = newState.findIndex( not => not.id===id)
         const newNot = {...newState[index], date:newDate}
         newState[index]=newNot
         return newState
      }
    default:
      return state
  }
}

export default notifications
