import React, { Component } from 'react'
import account from '../../actions/accountAction'
import { Link } from 'react-router'

export default class App extends Component {
  render () {
    return (
      <div>
        <Link to='/dashboard/setting'>dfsdfsdf</Link>
        <button onClick={account.SignOut} >logout</button>
        {this.props.children}
      </div>
    )
  }
}