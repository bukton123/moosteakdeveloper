import React, { Component } from 'react'
import account from '../../actions/accountAction'

class Signin extends Component {
  render () {
    return (
      <div>
        <button onClick={account.SigeInFacebook}>fb</button>
        <button onClick={account.SigeInGoogle}>gg</button>
      </div>
    )
  }
}

export default Signin