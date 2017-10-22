// import { combineReducers } from 'redux'
// import todos from './todos'
// import visibilityFilter from './visibilityFilter'
//
// const todoApp = combineReducers({
//   todos,
//   visibilityFilter
// })
//
// export default todoApp

const start = [{
    id: 100,
    date: "1/1",
    importance: "1",
    title: "111",
    nextAction: "Go 1",
    details: "More about 1",
  //   completed: false
}]

const notifications = (state = start, action) => {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
        console.log('ADD')
      return [
        ...state,
        {
          id: action.id,
          date: "",
          importance: "",
          title: "",
          nextAction: "",
          details: "",
        //   completed: false
        }
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

export default notifications
