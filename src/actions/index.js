let nextTodoId = 0
export const addTodo = (date, importance, title, nextAction, details) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    date,
    importance,
    title,
    nextAction,
    details
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
