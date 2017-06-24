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
        <div>
            <Grid>
                <Row>
                    <Image src="" rounded />
                </Row>
                <Row>
                    <div style={{marginTop:'30%'}}>
                        <Col xs={4} xsOffset={4}>
                            <Button style={{height: '50px'}} block bsStyle="primary" onClick={this.signInFacebook}>Login with Facebook</Button>
                        </Col>
                    </div>
                </Row>
                <Row>
                    <Col xs={4} xsOffset={4}>
                        <div style={{marginTop:'20px'}}>
                            <Button style={{height: '50px'}} block bsStyle="danger"  onClick={this.signInGoogle} >Login with Google</Button>
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
