import {fireDB} from '../fire.js'
import DISPLAY_MODES from '../CONSTS.js'
import {standerdizeDateToDay} from '../dateStanderdize.js'


// Init

export const setUser = (user) => ({
   type:'SET_USER',
   user
})

export const createUserState = (userId) =>
   (dispatch) => {
      const userNotsDBRef = fireDB.ref('notifications/' + userId);
      // userNotsDBRef.set({}) //empty userDB
      userNotsDBRef.once('value').then ( snapshot => {
         const userData = snapshot.val()
         console.log('here is a snapshot of userDb ', userData)
         const notificationsStore = userData
         for (let key in notificationsStore){
            notificationsStore[key].date = new Date(notificationsStore[key].date)
         }
         dispatch ({
            type: "CREATE_USER_STATE",
            notificationsStore,
         })
         dispatch (refreshNotsDisplay())
      })
   }

// User's actions Nots

export const addNewNotification = () =>
   (dispatch, getState) => {
      // const userId = getState().user && getState().user.uid;
      const date = standerdizeDateToDay(new Date())


      const unixDate = date.getTime()
      const newNotification = {
         importance:3,
         title:"",
         next:"",
         details:"",
         date: unixDate,
         completed: false
      }
      const userId = getState().user.uid;
      const notKey = fireDB.ref(`notifications/${userId}`).push(newNotification).key;
      newNotification.date=date
      dispatch ({
         type: 'ADD_NEW_NOTIFICATION',
         notKey,
         newNotification
      })
      dispatch ({
         type: "INSERT_NOT_TOP_OF_DISPLAY",
         notKey
      })
   }

export const deleteNotification = (notKey) =>
   (dispatch, getState) => {

      // const userId = getState().user && getState().user.uid;
      const userId = getState().user.uid;
      fireDB.ref(`notifications/${userId}/${notKey}`).remove();
      dispatch ({
        type: 'DELETE_NOTIFICATION',
        notKey
      })
      dispatch (refreshNotsDisplay())
   }

export const toggleComplete = (notKey, oldCompleted) =>
   (dispatch, getState) => {
      const userId = getState().user.uid;
      const newCompleted = !oldCompleted
      fireDB.ref(`notifications/${userId}/${notKey}/completed`).set(newCompleted)
      dispatch({
         type: 'TOGGLE_COMPLETE',
         notKey
      })
      dispatch(refreshNotsDisplay())
   }

export const editField = (notKey, field, text) =>
   (dispatch, getState) => {
      const userId = getState().user.uid;
      fireDB.ref(`notifications/${userId}/${notKey}/${field}`).set(text)
      dispatch({
         type:'EDIT_FIELD',
         notKey,
         field,
         text
      })
   }

export const changeImportance = (notKey, newImportanceValue) =>
   (dispatch, getState) => {
      const userId = getState().user.uid;
      fireDB.ref(`notifications/${userId}/${notKey}/importance`).set(newImportanceValue)
      dispatch({
         type: 'CHANGE_IMPORTANCE_VALUE',
         notKey,
         newImportanceValue
      })
   }

export const changeDate = (notKey, newDate) =>
   (dispatch, getState) => {
      newDate = standerdizeDateToDay(newDate)
      const userId = getState().user.uid;
      const newTimeStamp = newDate.getTime()
      fireDB.ref(`notifications/${userId}/${notKey}/date`).set(newTimeStamp)
      dispatch ({
         type: 'CHANGE_DATE',
         notKey,
         newDate
      })
      dispatch(refreshNotsDisplay())
   }

// User's actions other

export const setDisplayMode = (val) =>
   (dispatch, getState) =>{
      dispatch({
         type: "SET_DISPLAY_MODE",
         val: val
      })

      dispatch (refreshNotsDisplay())
   }


export const toggleAboutDraw = () => ({
   type: "TOGGLE_ABOUT_DRAW"
})

// Display



export const refreshNotsDisplay = () =>
   (dispatch, getState) => {
      const displayMode = getState().display.displayMode
      if (displayMode === DISPLAY_MODES.NEXT.val){
         dispatch ({ type: "DISPLAY_NEXT_NOTS"})
      } else if (displayMode === DISPLAY_MODES.WEEK.val){
         dispatch ({ type: "DISPLAY_WEEK_NOTS"})
      } else if (displayMode === DISPLAY_MODES.ALL.val){
         dispatch ({ type: "DISPLAY_ALL_NOTS"})
      } else {dispatch({type:"DISPLAY_DONE_NOTS"})}
   }



export const refreshTable = () => {
   return {type: 'REFRESH_TABLE'}
}


export const displayToday = () => {
   return {
      type: "DISPLAY_TODAY"
   }
}
