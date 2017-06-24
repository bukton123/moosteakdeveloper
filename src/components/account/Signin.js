import React, { Component } from 'react'
import account from '../../actions/accountAction'
import { Button, Grid, Row, Col, Image, Glyphicon} from 'react-bootstrap';


class Signin extends Component {
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
                            <Button className="btn-login" block bsStyle="primary" onClick={account.SigeInFacebook}>Login with Facebook</Button>
                        </Col>
                    </div>
                </Row>
                <Row>
                    <Col sm={12}>
                        <div className="btn-google">
                            <Button className="btn-login" block bsStyle="danger"  onClick={account.SigeInGoogle} >Login with Google</Button>
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
