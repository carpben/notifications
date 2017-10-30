let notificationId = 0
export const addNotification = () => {
    console.log('addNotification action')

  return {
    type: 'ADD_NOTIFICATION',
    id: notificationId++,
    // date,
    // importance,
    // title,
    // nextAction,
    // details
  }
}

export const notificationDeleteAction = (id) => {
  return {
    type: 'NOTIFICATION_DELETE',
    id
    // date,
    // importance,
    // title,
    // nextAction,
    // details
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
