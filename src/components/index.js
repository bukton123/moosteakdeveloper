import React, { Component } from 'react'

function asyncComponent (getComponent) {
  return class AsyncComponent extends Component {
    static Component = null;
    state = { Component: AsyncComponent.Component }

    componentWillMount () {
      if (!this.state.Component) {
        getComponent().then(Component => {
          AsyncComponent.Component = Component
          this.setState({ Component })
        })
      }
    }
    render () {
      const { Component } = this.state
      if (Component) {
        return <Component { ...this.props } />
      }
      return null
    }
  }
}

import App from './App'
import Dashboard from './dashboard'
import Signin from './account/Signin'
import InitScreen from './InitScreen'
import Profile from './Profile'
import Order from './Order'
// const Dashboard = asyncComponent(() =>
//   System.import('./dashboard').then(module => module.default)
// )

// const Signin = asyncComponent(() =>
//   System.import('./account/Signin').then(module => module.default)
// )
// const InitScreen = asyncComponent(() =>
//   System.import('./InitScreen').then(module => module.default)
// )

export {
  App,
  Signin,
  Dashboard,
  InitScreen,
  Profile,
  Order
}
