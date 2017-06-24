import React, { Component } from 'react'
import Navbar from './NavBar'

export default class App extends Component {
  render () {
    return (
      <div>
<<<<<<< HEAD
        <Navbar />
        <div className='top-content'>
          {this.props.children}
        </div>
=======
        <button onClick={account.SignOut} >logout</button>
        {this.props.children}
>>>>>>> origin/master
      </div>
    )
  }
}