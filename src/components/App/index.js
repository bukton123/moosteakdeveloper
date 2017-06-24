import React, { Component } from 'react'
import {observer} from 'mobx-react'
import account from '../../actions/accountAction'

@observer
export default class App extends Component {
  render () {
    return (
      <div>
        <button onClick={account.SignOut} >logout</button>
        {this.props.children}
      </div>
    )
  }
}