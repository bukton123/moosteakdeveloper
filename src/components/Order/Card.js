import React, { Component } from 'react'

class Card extends Component {
  state = {
    count: 1
  }

  addNext = () => {
    const count = this.state.count
    const newCount = count < 10 ? 1 + count : count
    this.setState({
      count: newCount
    })
  }

  addPrev = () => {
    const count = this.state.count
    const newCount = count > 1 ? count - 1 : count
    this.setState({
      count: newCount
    })
  }

  render () {
    const {
      OrderId,
      name,
      price,
      photo,
      star,
      add
    } = this.props
    const {
      count
    } = this.state
    let Arrstar = []
    for (var i = 0;i < star; i++) {
      Arrstar[i] =  new Date()
    }
    return (
      <div className='card analytic-user'>
        <div className='card-block-big'>
          <div className='col-xs-6'>
            <div className='numbers'>
              <h3>{name}</h3>
              <h2>{price}</h2>
                <span className='text-warning star'>
                  {
                    Arrstar.map((v, i) => {
                      return <i key={i} className='fa fa-star' />
                    })
                  }
                </span>
            </div>
          </div>
          <div className='col-xs-6'>
            <div className='icon-big icon-warning text-center'>
              <img src={photo} alt={name}  style={{width: 200, height: 130}}/>
            </div>
          </div>
          
        </div>
        <div className='card-footer'>
          <div className='col-xs-6'>
              <div className='input-group' style={{marginTop: 7}}>
                <span className='input-group-btn'>
                    <button type='button' className='btn btn-default btn-number' data-type='minus' onClick={this.addPrev}>
                        <span className='glyphicon glyphicon-minus'></span>
                    </button>
                </span>
                <input type='text' className='form-control input-number' value={count} min='1' max='10' />
                <span className='input-group-btn'>
                    <button type='button' className='btn btn-default btn-number' data-type='plus' data-field='quant[1]' onClick={this.addNext}>
                        <span className='glyphicon glyphicon-plus'></span>
                    </button>
                </span>
            </div>
          </div>
          <div className='col-xs-6'>
            <div className='numbers right'>
              <button className='btn btn-new-warning-view btn-flat-lg' style={{width: '100%'}} onClick={() => add(OrderId, count) }>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card