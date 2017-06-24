import React, { Component } from 'react'
import account from '../../actions/accountAction'
import defaultStore from '../../stores/defaultStore'
import swal  from 'sweetalert'
import { Link } from 'react-router'

class Setting extends Component {
  state = {
    name: '',
    email: '',
    profile: ''
  }

  handleChange = (name, e) => {
    var change = {}
    change[name] = e.target.value
    this.setState(change)
  }

  componentWillMount() { 
    account.getUser().then(u => {
      this.setState({
        profile: u,
        name: u.name,
        email: u.email,
        photo: u.photo
      })
    })
  }

  save = () => {
    account.updateProfile(this.state)
    swal("", 'บันทึกข้อมูลโปรไฟล์เรียบร้ยเเล้ว')
  }

  render () {
    const {
      profile,
      name,
      email,
      photo
    } = this.state

    if(profile === '') return null
    return (
      <div className='container'>
         <div className='col-sm-4 col-sm-offset-4 profile-box' >
          <div className='text-center'>
            <br/><br/>
            <img alt='' src={ photo } />
          </div>
          <div className='form-group'>
            <label> ชื่อ </label>
            <input type="text" className='form-control' value={name} onChange={ this.handleChange.bind(this, 'name') }/>
          </div>
          <div className='form-group'>
            <label> อีเมล์ </label>
            <input type="text" className='form-control' value={email} onChange={ this.handleChange.bind(this, 'email') } />
          </div>
            <div className='col-sm-6'>
              <button className='btn btn-new-warning-view btn-flat' onClick={ this.save } >บันทึก</button>
            </div>
            <div className='col-sm-6 text-right'>
              <Link to='/dashboard' className='btn btn-new-warning-view btn-flat' >ย้อนกลับ</Link><br/><br/>
            </div>
            
         </div> 
         <div className='col-sm-4 col-sm-offset-4 text-center' style={{marginTop: 20}}>
          <button className='btn btn-new-danger-view btn-flat' onClick={ account.SignOut } >ออกจากระบบ</button>
         </div>  
      </div>
    )
  }
}

export default Setting
