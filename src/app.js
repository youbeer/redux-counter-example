import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import createLogger from 'redux-logger'

import Counter from './containers/ChangeCounter'
import counterReducer from './reducers'

// main
const logger = createLogger()
const store = createStore(
  counterReducer,
  applyMiddleware(logger)
)

render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('app-container')
)
