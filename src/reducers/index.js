import { combineReducers } from 'redux'
import notifications from './notifications'
import user from './user'

const nextApp = combineReducers({
  notifications,
  user
})

export default nextApp
