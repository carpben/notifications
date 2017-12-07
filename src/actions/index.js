let notificationId = 0
export const addNotification = () => {
  return {
    type: 'ADD_NOTIFICATION',
    id: notificationId++,
  }
}

export const notificationDeleteAction = (id) => {
  return {
    type: 'NOTIFICATION_DELETE',
    id
  }
}


export const toggleComplete = id => {
  return {
    type: 'TOGGLE_COMPLETE',
    id
  }
}

export const refreshTable = () => {
   return {type: 'REFRESH_TABLE'}
}

export const editField = (id, field, text) => {
   return {
      type:'EDIT_FIELD',
      id,
      field,
      text
   }
}

export const changeImportance = (id, newImportanceValue) => {
   console.log(newImportanceValue)
   return ({
      type: 'CHANGE_IMPORTANCE_VALUE',
      id,
      newImportanceValue
   })
}

export const changeDate = (id, newDate) => {
   return {
      type: 'CHANGE_DATE',
      id,
      newDate
   }
}

export const editMessage = (newMessage) => {
   return {
      type: "EDIT_MESSAGE",
      newMessage
   }
}

export const setUser = (user) => ({
   type:'SET_USER',
   user
})