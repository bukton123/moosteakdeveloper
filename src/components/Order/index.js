import React, { Component } from 'react'
import Card from './Card'
import swal  from 'sweetalert'
import order from '../../actions/orderAction'

class Order extends Component {
  state = {
    count: 0,
    order: []
  }

  addOrder = (id, total) => {
    let count = this.state.count
    let order = this.state.order
    order.push({
      id,
      total
    })
    this.setState({
      count: count+1,
      order
    })
  }

  saveOrder = () => {
    const count = this.state.count
    if (count !== 0) {
      order.setOrder(this.state.order)
      swal({
        title: "",
        text: "รับรายการสั่งซื้อเรียบร้อยเเล้ว",
        type: "success",
      })
      setTimeout(() => {
        new Notification(
          "HiewJung",
          {
            "body":"รับรายการสั่งซื้อเรียบร้อยเเล้ว",
            "icon":"/static/icon/128.png"
          }
        )
      }, 3000)
      this.setState({
        count: 0,
        order: []
      })
    } else {
      swal({
        title: "",
        text: "คุณยังไม่ได้สั่งรายการอาหาร",
        type: "warning",
      })
    }
  }
    render () {
      const {
        count
      } = this.state
      return (
        <div>
          <div className="text-right">
            <button style={{marginRight: 5}} className='btn btn-new-green-view btn-flat-lg-login' onClick={this.saveOrder}>ยืนยัน</button>
            <button style={{cursor: 'default'}} className='btn btn-new-warning-view btn-flat-lg-login'>จำนวนรายการ : {count}</button>
          </div>
          <h2>รายการอาหาร </h2>
          <div className='row' style={{marginTop: 20}}>
            <div className='col-lg-4 col-sm-12'>
              <Card 
                name='หมูสะเต๊ะ'
                price='ชุดละ 50 บาท'
                star={4}
                photo='/static/asset/images/moo.jpg'
                add={this.addOrder}
                OrderId='01' />
            </div>
            <div className='col-lg-4 col-sm-12'>
              <Card 
                name='ส้มตำ'
                price='40 บาท'
                star={5}
                photo='/static/asset/images/st.jpg'
                add={this.addOrder}
                OrderId='02' />
            </div>
            <div className='col-lg-4 col-sm-12'>
              <Card 
                name='คอหมูย่าง'
                price='ชุดละ 60 บาท'
                star={3}
                photo='/static/asset/images/km.jpg'
                add={this.addOrder}
                OrderId='03' />
            </div>
            <div className='col-lg-4 col-sm-12'>
              <Card 
                name='ข้าวเหนียว'
                price='กระติ๊บละ 25 บาท'
                star={5}
                photo='/static/asset/images/k.jpg'
                add={this.addOrder}
                OrderId='04' />
            </div>
            <div className='col-lg-4 col-sm-12'>
              <Card 
                name='ยำทะเล'
                price='79 บาท'
                star={5}
                photo='/static/asset/images/yum.jpg'
                add={this.addOrder}
                OrderId='05' />
            </div>
            <div className='col-lg-4 col-sm-12'>
              <Card 
                name='ลาบ'
                price='69 บาท'
                star={5}
                photo='/static/asset/images/la.jpg'
                add={this.addOrder}
                OrderId='06' />
            </div>
            <div className='col-lg-4 col-sm-12'>
              <Card 
                name='ต้มยำกุ้ง'
                price='99 บาท'
                star={5}
                photo='/static/asset/images/tm.jpg'
                add={this.addOrder}
                OrderId='07' />
            </div>
            <div className='col-lg-4 col-sm-12'>
              <Card 
                name='ต้มยำหม้อไฟ'
                price='159 บาท'
                star={5}
                photo='/static/asset/images/tym.jpg'
                add={this.addOrder}
                OrderId='08' />
            </div>
            <div className='col-lg-4 col-sm-12'>
              <Card 
                name='ไก่ย่าง'
                price='220 บาท'
                star={4}
                photo='/static/asset/images/ky.jpg'
                add={this.addOrder}
                OrderId='09' />
            </div>
          </div>
        </div>
      )
    }
}

export default Order
