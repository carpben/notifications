const init = {
   store: {},
   toDisplay: []
}


const notifications = (state = init, action) => {
   switch (action.type) {
      case "CREATE_USER_STATE":
         return {store: action.notificationsStore, toDisplay:state.toDisplay}
      case "DISPLAY_TODAY":

         let newToDisplay = Object.keys(state.store)
         console.log("today's display is ", newToDisplay)
         newToDisplay = newToDisplay.filter( notKey => !state.store[notKey].completed )
         console.log("today's display is ", newToDisplay)
         // const today = new Date().getDate()
         // newToDisplay= newToDisplay.filter( key => state.store[key].date.getDate()===today )
         // console.log("today's display is ", newToDisplay)
         //
         // newToDisplay.sort(
         //    (key1, key2) => state.store[key2].importance - state.store[key1].importance
         // )
         // console.log("today's display is ", newToDisplay)

         return {store:state.store, toDisplay: newToDisplay}
      case 'REFRESH_TABLE':
         return [...state].sort(
            (not1, not2) => not2.importance-not1.importance
         ).sort(
            (not1, not2) => not1.date-not2.date
         )
         .sort(
            (not0, not1) => not0.completed-not1.completed
         )

      case 'ADD_NOTIFICATION':
         return [
           ...state,
           action.newNotification
         ]
      case 'DELETE_NOTIFICATION':
         console.log("delte reducer")
         return state.filter((object)=>object.notKey!==action.notKey);
      case 'TOGGLE_COMPLETE':
         const newStore = {...state.store}
         newStore[action.notKey].completed= !newStore[action.notKey].completed
         return {store:newStore, toDisplay:state.toDisplay}

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
         const {notKey, newDate} = action
         const newStore = {...state.store}
         newStore[notKey].date = newDate
         return {store: newStore, toDisplay:state.toDisplay}
      }
    default:
      return state
  }
}

export default notifications
