
const notifications = (state = [], action) => {
   switch (action.type) {
      case "CREATE_USER_STATE":
         return action.newState
      case 'ADD_NOTIFICATION':
         return [
           ...state,
           action.newNotification
         ]
      case 'DELETE_NOTIFICATION':
         console.log("delte reducer")
         return state.filter((object)=>object.notKey!==action.notKey);
      case 'TOGGLE_COMPLETE':
         return state.map( notification =>
            (notification.notKey === action.notKey)? {...notification, completed: !notification.completed}
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
         const {notKey, field, text}=action
            const newState = state.map( notification => {
               if (notification.notKey===notKey) {
                  return Object.assign({}, notification, { [field]: text } )
               }
               return notification
            })
            return newState
      case 'CHANGE_IMPORTANCE_VALUE':
         {
            const {notKey, newImportanceValue}=action
            const newState = state.map( not => {
               if (not.notKey!==notKey) {return not}
               else {
                  not.importance=newImportanceValue
                  return not
               }
            })
            return newState
         }
      case 'CHANGE_DATE':
      {
         console.log("changeDateReducer runs")
         const {notKey, newDate} = action
         const newState = [...state]
         const index = newState.findIndex( not => not.notKey===notKey)
         const newNot = {...newState[index], date:newDate}
         newState[index]=newNot
         return newState
      }
    default:
      return state
  }
}

export default notifications
