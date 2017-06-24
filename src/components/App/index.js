import React, { Component } from 'react'
import Navbar from './NavBar'

export default class App extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <div className='top-content'>
          {this.props.children}
        </div>
      </div>
    )
  }
}