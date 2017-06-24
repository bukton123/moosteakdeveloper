import React, { Component } from 'react'
import { Link } from 'react-router'
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
                <a href="javascript:;"><i className='fa fa-bell' /><span>5</span></a>
                <Link to='dashboard/order' ><i className='fa fa-user-circle' /></Link>
            </div>
        </header>           
      </div>
    )
  }
}
export default Navbar