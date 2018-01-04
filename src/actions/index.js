import {fireDB} from '../fire.js'
import DISPLAY_MODES from '../CONSTS.js'
import {taskExamples, placeHoldersEmptyDB} from '../loadOptions.js'
import moment from "moment"
import {momentObjToStr} from '../functions.js'

// Init

export const setUser = (user) => ({
   type:'SET_USER',
   user
})

export const createUserState = (userId) =>
   (dispatch) => {
      const userNotsDBRef = fireDB.ref('notifications/' + userId);
      userNotsDBRef.once('value').then ( snapshot => {
         const userData = snapshot.val()
         if (userData) {
            // console.log('here is a snapshot of userDb ', userData)
            const notificationsStore = userData
            for (let notKey in notificationsStore){
               // notificationsStore[notKey].date = new Date(notificationsStore[notKey].date)
               if (!notificationsStore[notKey].dateStr){
                  const dateStr = moment((notificationsStore[notKey].date)).format("YYYY-MM-DD")
                  fireDB.ref(`notifications/${userId}/${notKey}/dateStr`).set(dateStr)
                  notificationsStore[notKey].dateStr = dateStr
               }
               // notificationsStore[notKey].dateStr = moment((notificationsStore[notKey].date)).format("YYYY-MM-DD")

            }
            dispatch ({
               type: "CREATE_USER_STATE",
               notificationsStore,
            })
            dispatch (refreshNotsDisplay())
         } else {
            dispatch(toggleAboutDraw())
            dispatch(loadReceivedNots(placeHoldersEmptyDB))
         }
      })
   }

export const loadReceivedNots = (notsArr) =>
      (dispatch, getState) => {

         console.log("loadReceivedNots dispatched")
         const userId = getState().user.uid;
         const dateStr = momentObjToStr(moment())
         notsArr.forEach( notExample => {
            notExample.dateStr = dateStr
            const notKey = fireDB.ref(`notifications/${userId}`).push(notExample).key;
            dispatch ({
               type: 'ADD_NEW_NOTIFICATION',
               notKey,
               newNotification:notExample
            })
         })
         dispatch(refreshNotsDisplay())
      }

export const loadTaskExamples = () =>
   (dispatch) => {
      dispatch(loadReceivedNots(taskExamples))
   }

// User's actions Nots

export const addNewNotification = () =>
   (dispatch, getState) => {
      // const userId = getState().user && getState().user.uid;
      const dateStr = momentObjToStr(moment())

      const newNotification = {
         importance:3,
         date: dateStr,
         completed: false
      }
      const userId = getState().user.uid;
      const notKey = fireDB.ref(`notifications/${userId}`).push(newNotification).key;
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

export const changeDate = (notKey, newDateStr) =>
   (dispatch, getState) => {
      const userId = getState().user.uid;
      fireDB.ref(`notifications/${userId}/${notKey}/dateStr`).set(newDateStr)
      dispatch ({
         type: 'CHANGE_DATE',
         notKey,
         dateStr:newDateStr
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
