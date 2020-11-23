import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore, applyMiddleware, compose } from 'redux'
import ideasReducer from './reducers/ideasReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'


const store = createStore(
  ideasReducer,
  compose(applyMiddleware(thunk), composeWithDevTools())
)

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
  document.getElementById('root')
)
