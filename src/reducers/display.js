import DISPLAY_MODE from '../CONSTS.js'

const displayStart = {
   displayMode: DISPLAY_MODE.NEXT.val,
   showAbout: false, 
}

const display = (state = displayStart, action) => {
  switch (action.type) {
    case 'SET_DISPLAY_MODE':
      return {...state, displayMode:action.val}
   case 'TOGGLE_ABOUT_DRAW':
      return {...state, showAbout:!state.showAbout}
    default:
      return state
  }
}

export default display
