import React, { Component } from 'react'
import account from '../../actions/accountAction'
class Navbar extends Component{
  render () {
    const props = this.props
    return (
      <div>
        <div className="navbar-wrapper">
            <div className="container-fluid">
                <nav className="navbar navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            </button>
                            <a href="#" className='logo'><img src='/static/asset/images/HiewKao-logo-web-128.png' alt='picture' /></a>
                            
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <li><a href="#">Home</a></li>
                            </ul>
                            <ul className="nav navbar-nav">
                              <li onClick={ () => account.SignOut}><a href="#"><i className='fa fa-bell' /></a></li>
                                <li className=" dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className='fa fa-user-circle' /><span className="caret"></span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#"><i className='fa fa-cog margin-right' />Setting Profile</a></li>
                                        <li><a href="#"><i className='fa fa-user margin-right' />Profile</a></li>
                                        <li onClick={ () => account.SignOut}><a href="#"><i className='fa fa-sign-out margin-right' />Logout</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
      </div>
    )
  }
}
export default Navbar