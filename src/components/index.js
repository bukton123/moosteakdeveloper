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
// const Dashboard = asyncComponent(() =>
//   System.import('./Dashboard').then(module => module.default)
// )
const Signin = asyncComponent(() =>
  System.import('./account/Signin').then(module => module.default)
)

export {
  App,
  Signin
}