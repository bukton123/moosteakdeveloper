import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import * as stores from './stores'
import { requireAuth } from './utils'
import {
  App,
  Dashboard
} from './components'
function test() {
  console.log(0)
}

export default class AppMain extends Component {
  render () {
    return (
      <Provider { ...stores }>
        <Router key={ Math.random() } history={ browserHistory }>
          <Route path='/' component={ App } >
            <IndexRoute component={ Dashboard } onEnter={requireAuth} />
            <Route path='dashboard' component={ Dashboard } />
          </Route>
        </Router>
      </Provider>
    )
  }
}