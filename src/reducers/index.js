import { combineReducers } from 'redux'
import notifications from './notifications'
import message from './message'

const nextApp = combineReducers({
  notifications,
  message
})

export default nextApp
