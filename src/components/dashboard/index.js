import React, { Component } from 'react'

class Dashboard extends Component {
    render () {
      return (
        <div>
          <h2>สั่งอาหาร</h2>
          <div className='content-menu'>

          <div className="content-box">
            <div className="content-header">
              <span>รายการที่ #1</span>
            </div>
            <div className='content-container'>
              <div>
              </div>

              <hr/>
              <p>จำนวนเงิน 5000 บาท</p>
            </div>
          </div>

          <br/>
          <br/>
          <br/>

          <div className="search">
  
    <div className="field">

      <input type="text" className="input-search" id="input-search" name="input-search" required />
      <label htmlFor="input-search">Search</label>

    </div>

  </div>


          
          </div>
        </div>
      )
    }
}

export default Dashboard
