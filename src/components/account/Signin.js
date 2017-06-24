import React, { Component } from 'react'
import account from '../../actions/accountAction'

class Signin extends Component {
  render () {
    return (
        <div className="login">
            <div className="col-sm-4 col-sm-offset-4 text-center" style={{marginTop: '5%'}} >
                <img className="img-responsive login-img" alt='' style={{margin: 'auto'}} src="/static/asset/images/384.png" />
            </div>
            <div className='col-sm-2 col-md-4 col-sm-offset-5 col-md-offset-4 text-center' style={{marginTop: 100}}>
                <button className="btn btn-new-primary-view btn-flat-lg-login"  style={{width: 300, borderRadius: '0'}} onClick={account.SigeInFacebook}><i className='fa fa-facebook' />&nbsp;&nbsp;&nbsp;Login with Facebook</button>
            </div>
            <div className='col-sm-2 col-md-4 col-sm-offset-5 col-md-offset-4 text-center' style={{marginTop: 30}}>
                <button className="btn btn-new-danger-view btn-flat-lg-login"  style={{width: 300, borderRadius: '0'}} onClick={account.SigeInGoogle}><i className='fa fa-google' />&nbsp;&nbsp;&nbsp;Login with Google</button>
            </div>
        </div>
    )
  }
}

export default Signin
