import React, { Component } from 'react'

export default class App extends Component {
  render () {
    return (
      <div>
        <div>App</div>
        {this.props.children}
      </div>
    )
  }
}