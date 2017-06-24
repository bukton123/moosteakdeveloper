import React, { Component } from 'react'

import account from '../../actions/accountAction'

class Signin extends Component {

  signInGoogle = () => {
    account.SigeInGoogle().then(res => {
      console.log(res)
    })
  }

  signInFacebook = () => {
    account.SigeInFacebook().then(res => {
      console.log(res)
    })
  }

  render () {
    return (
      <div>
        <button onClick={this.signInFacebook}>fb</button>
        <button onClick={this.signInGoogle} >gg</button>
        <button onClick={account.SignOut} >logout</button>
      </div>
    )
  }
}

export default Signin