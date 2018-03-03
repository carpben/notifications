import moment from "moment"
import {dateStrToInt, momentObjToStr} from '../functions.js'

const init = {
	store: {},
	toDisplay: []
}


const notifications = (state = init, action) => {


	const store = {...state.store}
	const toDisplay = [...state.toDisplay]

//---- ACTIONS THAT AFFECT THE NOTS_STORE -------
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
			return {store, toDisplay}
		case 'CHANGE_IMPORTANCE_VALUE':{
			const {notKey, newImportanceValue} = action
			store[notKey].importance = newImportanceValue
			return {store, toDisplay}
		}
		case 'CHANGE_DATE':
		{
			const {notKey, newDate, dateStr} = action
			const newStore = {...state.store}
			newStore[notKey].date = newDate
			newStore[notKey].dateStr = dateStr
			return {store: newStore, toDisplay:state.toDisplay}
		}

//---- ACTIONS THAT AFFECT THE NOTS_TO_DISPLAY

		case "DISPLAY_NEXT_NOTS":{
			if (!state.store) {return state}
			let newToDisplay = Object.keys(state.store)
			newToDisplay = newToDisplay.filter( notKey => !state.store[notKey].completed )
			const todayStr = momentObjToStr(moment())
			newToDisplay= newToDisplay.filter( key => state.store[key].dateStr<=todayStr )
			newToDisplay = newToDisplay.sort(
				(key1, key2) => state.store[key2].importance - state.store[key1].importance
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
				(key1, key2) => {
					const date1Int = dateStrToInt(state.store[key1].dateStr)
					const date2Int = dateStrToInt(state.store[key2].dateStr)
					return date1Int-date2Int
				}
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
			const sevenDaysFromTodayStr = momentObjToStr(moment().add(7, 'days'))
			console.log(`sevenDaysFromTodayStr=${sevenDaysFromTodayStr}`)
			newToDisplay= newToDisplay.filter( key => state.store[key].dateStr<=sevenDaysFromTodayStr )
			newToDisplay = newToDisplay.sort(
				(key1, key2) => state.store[key2].importance - state.store[key1].importance
			)
			newToDisplay = newToDisplay.sort(
				(key1, key2) => {
					const date1Int = dateStrToInt(state.store[key1].dateStr)
					const date2Int = dateStrToInt(state.store[key2].dateStr)
					return date1Int-date2Int
				}
			)
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
