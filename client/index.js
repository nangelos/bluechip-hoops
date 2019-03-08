import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import history from './history'
import store from './store'
import App from './app'
import {RootProvider} from './RootProvider'

// establishes socket connection
// import './socket'

ReactDOM.render(
  <RootProvider>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </RootProvider>,
  document.getElementById('app')
)
