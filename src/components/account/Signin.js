import React, { Component } from 'react'
import { browserHistory } from 'react-router'

import account from '../../actions/accountAction'
import { Button, Grid, Row, Col, Image, Glyphicon} from 'react-bootstrap';


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
        <div className="login">
            <Grid>
                <Row>
                    <Col xs={12} className="img-logo">
                        <Image className="img-size" src="../../static/asset/images/384.png" rounded />
                    </Col>
                </Row>
                <Row>
                    <div className="btn-facebook">
                        <Col sm={12}>
                            <Button className="btn-login" block bsStyle="primary" onClick={this.signInFacebook}>Login with Facebook</Button>
                        </Col>
                    </div>
                </Row>
                <Row>
                    <Col sm={12}>
                        <div className="btn-google">
                            <Button className="btn-login" block bsStyle="danger"  onClick={this.signInGoogle} >Login with Google</Button>
                        </div>
                    </Col>
                </Row>
            </Grid>
         {/*<Button onClick={account.SignOut} >logout</Button>*/}
        </div>
    )
  }
}

export default Signin
