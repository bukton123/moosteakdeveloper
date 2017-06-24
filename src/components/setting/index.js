import React, { Component } from 'react'
import { Button, Grid, Row, Col, Image, Glyphicon, FormControl} from 'react-bootstrap';
import {addStyle} from 'react-bootstrap/lib/utils/bootstrapUtils';

addStyle(Button,'custom');

class Setting extends Component {


  render () {
    return (
        <div>
            <div className="img-header">
                <Grid>
                    <Row>
                        <Col xs={2} xsOffset={5}>
                            <div className="img-bogy">
                                <Image  src="../../static/asset/images/people-ic.png" circle />
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
            <div className="setting-content">
                <Grid>
                    <Row>
                        <Col xs={4} xsOffset={4}>
                            <FormControl type="text" placeholder="Name"></FormControl>
                        </Col>
                    </Row>
                    <Row className="input-setting">
                        <Col xs={4} xsOffset={4}>
                            <FormControl type="text" placeholder="Tel."></FormControl>
                        </Col>
                    </Row>
                    <Row className="input-setting">
                        <Col xs={4} xsOffset={4}>
                            <FormControl type="text" placeholder="E-mail"></FormControl>
                        </Col>
                    </Row>
                    <Row className="setting-content">
                        <Col xs={4} xsOffset={4}>
                            <Button bsStyle="custom" block>Submit</Button>
                        </Col>
                    </Row>
                </Grid>
            </div>
        </div>
    )
  }
}

export default Setting
