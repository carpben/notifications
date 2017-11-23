import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import nextApp from './reducers'
import App from './components/App'
import './App.css'

let store = createStore(nextApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
