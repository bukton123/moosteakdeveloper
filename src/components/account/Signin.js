import React, { Component } from 'react'
import { browserHistory } from 'react-router'

import account from '../../actions/accountAction'

class Signin extends Component {

  signInGoogle = () => {
    account.SigeInGoogle().then(res => {
      localStorage.setItem('auth',true)
      browserHistory.push('/')
    })
  }

  signInFacebook = () => {
    account.SigeInFacebook().then(res => {
      localStorage.setItem('auth',true)
      browserHistory.push('/')
    })
  }

  render () {
    return (
      <div>
        <button onClick={this.signInFacebook}>fb</button>
        <button onClick={this.signInGoogle} >gg</button>
      </div>
    )
  }
}

export default Signin