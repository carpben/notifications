const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      return [
        {
          id: action.id,
          date: "",
          importance: "",
          title: "",
          nextAction: "",
          details: "",
        //   completed: false
        }
        , ...state

      ]
    // case 'TOGGLE_TODO':
    //   return state.map(todo =>
    //     (todo.id === action.id)
    //       ? {...todo, completed: !todo.completed}
    //       : todo
    //   )
    default:
      return state
  }
}

export default add
