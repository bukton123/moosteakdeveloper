import React, { Component } from 'react'
import { Button, Grid, Row, Col, Image, Glyphicon, FormControl} from 'react-bootstrap';
import {addStyle} from 'react-bootstrap/lib/utils/bootstrapUtils';

addStyle(Button,'custom');

class Setting extends Component {


  render () {
    return (
      <div className='container'>
         <img alt=''  src="static/asset/images/people-ic.png" circle />       
      </div>
    )
  }
}

export default Setting
