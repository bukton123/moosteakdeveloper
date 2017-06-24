import React, { Component } from 'react'

class Dashboard extends Component {
    render () {
      return (
        <div>
          <h1 className='bg-color'>Dashboard</h1>
          <div className='icon-warning'>
            <i className='fa fa-user' />
            </div>
          <img src='/static/asset/images/banana.png' alt='picture'/>
        </div>
      )
    }
}

export default Dashboard
