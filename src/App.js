import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import * as stores from './stores'
import { requireAuth, isrequireAuth } from './utils'
import {
  App,
  Signin,
  Dashboard,
  InitScreen,
  Profile,
  Order
} from './components'

export default class AppMain extends Component {
  render () {
    return (
      <Provider { ...stores }>
        <Router key={ Math.random() } history={ browserHistory }>
          <Route path='/' component={ InitScreen }/>
          <Route path='/dashboard' component={ App }>
            <IndexRoute component={ Dashboard } onEnter={ requireAuth }/>
            <IndexRoute component={ Order } onEnter={ requireAuth }/>
            <Route path='profile' component={ Profile } onEnter={ requireAuth } />
          </Route>
          <Route path='/signin' component={ Signin } onEnter={ isrequireAuth }/>
          <Route path='/order' component={ Order } onEnter={ requireAuth }/>
        </Router>
      </Provider>
    )
  }
}
