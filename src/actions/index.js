let nextTodoId = 0
export const addNotification = () => {
    console.log('addNotification action')

  return {
    type: 'ADD_NOTIFICATION',
    id: nextTodoId++,
    // date,
    // importance,
    // title,
    // nextAction,
    // details
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
