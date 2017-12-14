import {standerdizeDateToDay} from '../dateStanderdize.js'

const init = {
   store: {},
   toDisplay: []
}


const notifications = (state = init, action) => {


   const store = {...state.store}
   const toDisplay = [...state.toDisplay]
   //ACTIONS THAT AFFECT THE NOTS_STORE
   switch (action.type) {
      case "CREATE_USER_STATE":
         return {store: action.notificationsStore, toDisplay}
      case 'ADD_NEW_NOTIFICATION':
         store[action.notKey]=action.newNotification
         return {store, toDisplay}
      case 'DELETE_NOTIFICATION':
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
         if (!state.store) {return state}
         let newToDisplay = Object.keys(state.store)
         newToDisplay = newToDisplay.filter( notKey => !state.store[notKey].completed )
         const today = standerdizeDateToDay(new Date())

         for (let key in newToDisplay){

         }
         newToDisplay= newToDisplay.filter( key => state.store[key].date<=today )
         //
         // newToDisplay.sort(
         //    (key1, key2) => state.store[key2].importance - state.store[key1].importance
         // )
         newToDisplay = newToDisplay.sort(
            (key1, key2) => state.store[key2].importance - state.store[key1].importance
         )
         newToDisplay = newToDisplay.sort(
            (key1, key2) => state.store[key1].date - state.store[key2].date
         )
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
      case "DISPLAY_DONE_NOTS":{
         if (!state.store) {return state}
         let newToDisplay = Object.keys(state.store)
         newToDisplay = newToDisplay.filter( notKey => state.store[notKey].completed )
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
         newToDisplay = newToDisplay.filter( notKey => !state.store[notKey].completed )
         const sevenDaysFromToday = standerdizeDateToDay(new Date(new Date().getTime()+(7*24 * 60 * 60 * 1000)))
         newToDisplay= newToDisplay.filter( key => state.store[key].date<=sevenDaysFromToday )
         newToDisplay = newToDisplay.sort(
            (key1, key2) => state.store[key2].importance - state.store[key1].importance
         )

         newToDisplay = newToDisplay.sort(
            (key1, key2) => state.store[key2].importance - state.store[key1].importance
         )
         newToDisplay = newToDisplay.sort(
            (key1, key2) => state.store[key1].date - state.store[key2].date
         )

         // newToDisplay = newToDisplay.sort(
         //    (key1, key2) => state.store[key2].importance - state.store[key1].importance
         // )
         // newToDisplay = newToDisplay.sort(
         //    (key1, key2) => state.store[key1].date - state.store[key2].date
         // )
         return {store, toDisplay: newToDisplay}
      }

      case "INSERT_NOT_TOP_OF_DISPLAY":{
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
