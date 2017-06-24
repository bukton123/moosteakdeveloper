import React, { Component } from 'react'

import account from '../../actions/accountAction'
import { Button, Grid, Row, Col, Image, Glyphicon} from 'react-bootstrap';


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
      var btn_style = {

      }


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
