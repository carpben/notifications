const init = {
   store: {},
   toDisplay: []
}


const notifications = (state = init, action) => {
   // console.log("notification reducer")
   // console.log("action is", action)
   // console.log("state is", state)

   const store = {...state.store}
   const toDisplay = [...state.toDisplay]
   //ACTIONS THAT AFFECT THE NOTS_STORE
   switch (action.type) {
      case "CREATE_USER_STATE":
         return {store: action.notificationsStore, toDisplay}
      case 'ADD_NEW_NOTIFICATION':
         console.log(103)
         store[action.notKey]=action.newNotification
         return {store, toDisplay}
      case 'DELETE_NOTIFICATION':
         console.log("delte reducer")
         delete store[action.notKey]
         return {store, toDisplay}
      case 'TOGGLE_COMPLETE':
         const newStore = {...state.store}
         newStore[action.notKey].completed= !newStore[action.notKey].completed
         return {store:newStore, toDisplay:state.toDisplay}
      case 'EDIT_FIELD':
         const {notKey, field, text}=action
         store[notKey][field]=text
            // const newState = state.map( notification => {
            //    if (notification.notKey===notKey) {
            //       return Object.assign({}, notification, { [field]: text } )
            //    }
            //    return notification
            // })
         return {store, toDisplay}
      case 'CHANGE_IMPORTANCE_VALUE':{
         const {notKey, newImportanceValue} = action
         store[notKey].importance = newImportanceValue
            // const {notKey, newImportanceValue}=action
            // const newState = state.map( not => {
            //    if (not.notKey!==notKey) {return not}
            //    else {
            //       not.importance=newImportanceValue
            //       return not
            //    }
            // })
         return {store, toDisplay}
      }
      case 'CHANGE_DATE':
      {
         const {notKey, newDate} = action
         const newStore = {...state.store}
         newStore[notKey].date = newDate
         return {store: newStore, toDisplay:state.toDisplay}
      }
      //ACTIONS THAT AFFECT THE NOTS_TO_DISPLAY
      case "DISPLAY_NEXT_NOTS":{
         console.log("state is")
         console.log(state)
         if (!state.store) {return state}
         let newToDisplay = Object.keys(state.store)
         newToDisplay = newToDisplay.filter( notKey => !state.store[notKey].completed )
         const today = new Date().getDate()
         // console.log("today is ", today)
         // console.log("today's display is ", newToDisplay)
         // console.log("state is")
         // console.log(state)
         for (let key in newToDisplay){

            // console.log(state.store[key].date.getDate())
         }
         newToDisplay= newToDisplay.filter( key => state.store[key].date.getDate()<=today )
         console.log("today's display is ", newToDisplay)
         // console.log("today's display is ", newToDisplay)
         //
         // newToDisplay.sort(
         //    (key1, key2) => state.store[key2].importance - state.store[key1].importance
         // )
         // console.log("today's display is ", newToDisplay)

         return {store, toDisplay: newToDisplay}
      }
      case "DISPLAY_ALL_NOTS":{
         if (!state.store) {return state}
         let newToDisplay = Object.keys(state.store)
         newToDisplay = newToDisplay.filter( notKey => !state.store[notKey].completed )
         newToDisplay = newToDisplay.sort(
            (key1, key2) => state.store[key2].importance - state.store[key1].importance
         )
         newToDisplay = newToDisplay.sort(
            (key1, key2) => state.store[key1].date - state.store[key2].date
         )
         return {store, toDisplay:newToDisplay}
      }
      case "DISPLAY_WEEK_NOTS":{
         if (!state.store) {return state}
         let newToDisplay = Object.keys(state.store)
         newToDisplay = newToDisplay.filter( notKey => state.store[notKey].completed )
         newToDisplay = newToDisplay.sort(
            (key1, key2) => state.store[key2].importance - state.store[key1].importance
         )
      }
      case "INSERT_NOT_TOP_OF_DISPLAY":{
         console.log("INSERT_NOT_TOP_OF_DISPLAY")
         toDisplay.unshift(action.notKey)
         return {store, toDisplay}
      }
      case 'REFRESH_TABLE':
         return [...state].sort(
            (not1, not2) => not2.importance-not1.importance
         ).sort(
            (not1, not2) => not1.date-not2.date
         )
         .sort(
            (not0, not1) => not0.completed-not1.completed
         )

    default:
      return state
  }
}

export default notifications
