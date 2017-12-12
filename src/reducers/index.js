import { combineReducers } from 'redux'
import notifications from './notifications'
import user from './user'
import display from './display'

const nextApp = combineReducers({
  notifications,
  user,
  display
})

export default nextApp
