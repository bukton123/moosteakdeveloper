import React, { Component } from 'react'
import { Button, Grid, Row, Col, Image, Glyphicon, FormControl} from 'react-bootstrap';
import {addStyle} from 'react-bootstrap/lib/utils/bootstrapUtils';

addStyle(Button,'custom');

class Setting extends Component {


  render () {
    return (
      <div>
            <div style={{paddingTop:'150px',paddingBottom: '150px',backgroundColor:'#F59723'}}>
                <Image></Image>
            </div>
            <div style={{marginTop:'70px'}}>
                <Grid>
                    <Row>
                        <Col xs={4} xsOffset={4}>
                            <FormControl type="text" placeholder="Name"></FormControl>
                        </Col>
                    </Row>
                    <Row style={{marginTop:'20px'}}>
                        <Col xs={4} xsOffset={4}>
                            <FormControl type="text" placeholder="Tel."></FormControl>
                        </Col>
                    </Row>
                    <Row style={{marginTop:'20px'}}>
                        <Col xs={4} xsOffset={4}>
                            <FormControl type="text" placeholder="E-mail"></FormControl>
                        </Col>
                    </Row>
                    <Row style={{marginTop:'70px'}}>
                        <Col xs={4} xsOffset={4}>
                            <style type="text/css">
                                {`.btn-custom {
                                    background-color: #F57C23;
                                    color: white;
                                }`}
                            </style>
                            <Button bsStyle="custom" block>Submit</Button>
                        </Col>
                    </Row>
                </Grid>
            </div>

            <div>


             </div>
      </div>
    )
  }
}

export default Setting
