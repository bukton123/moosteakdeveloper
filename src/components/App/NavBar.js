import React, { Component } from 'react'
import account from '../../actions/accountAction'

class Navbar extends Component{
  render () {
    const props = this.props
    return (
      <div>
        <header className="header-bar">
            <div className='col-xs-3'>
                <img src='/static/asset/images/HiewKao-logo-w-128.png' alt='picture' />
            </div>
            <div className="col-xs-9 text-right header-menu">
                <a href="javascript:;"><i className='fa fa-bell' /><span class="badge">5</span></a>
                <a href="javascript:;" onClick={account.SignOut} ><i className='fa fa-user-circle' /></a>
            </div>
        </header>           
      </div>
    )
  }
}
export default Navbar