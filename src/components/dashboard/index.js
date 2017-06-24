import React, { Component } from 'react'

class Dashboard extends Component {
    render () {
      return (
        <div>
          <h2>รายการสั่งอาหาร <button className='btn btn-new-warning-view btn-flat-lg-login'><i className='fa fa-plus'/> สั่งอาหาร</button></h2>
          <div className='content-menu'>
            <div className="col-sm-6">
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
            </div>

            <div className="col-sm-6">
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
            </div>

            <div className="col-sm-6">
              <div className="content-box">
                <div className="content-header">
                  <span>รายการที่ #1</span>
                  <span>เวลารอ</span>
                </div>
                <div className='content-container'>
                  <div>
                  </div>

                  <hr/>
                  <p>จำนวนเงิน 5000 บาท</p>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
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
            </div>
          </div>
        </div>
      )
    }
}

export default Dashboard
