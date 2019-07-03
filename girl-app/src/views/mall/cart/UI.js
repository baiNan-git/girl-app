import React, { Component } from 'react';

class Com extends Component {
  constructor (props) {
    super(props)
    this.state = {
      price: 0,
      num: 1,
      flag: false,
    }
  }
  add () {
    this.setState({
      flag: !this.state.flag
    }, ()=> {
      if (this.state.flag) {
        this.refs.xuan.style.background = '#EC6A9B';
        this.setState({
          price: this.refs.price.innerHTML * parseInt(this.refs.shuzi.innerHTML)
        })
      } else {
        this.refs.xuan.style.background = '#fff';
        this.setState({
          price: 0,
        })
      }
    })
  }
  goback () {
    console.log(this.props)
    this.props.history.go(-1)
  }
  jia () {
    this.setState({
      num: this.state.num+1
    }, ()=> {
      if (this.state.flag) {
        this.setState({
          price: this.refs.price.innerHTML * parseInt(this.refs.shuzi.innerHTML)
        })
      }
    })
  }
  jian () {
    if (this.state.num>1) {
      this.setState({
        num: this.state.num-1
      },()=>{
        if (this.state.flag) {
          this.setState({
            price: this.refs.price.innerHTML * parseInt(this.refs.shuzi.innerHTML)
          })
        }
      })
    }
  }
  render () {
    return(
      <div className = 'box'>
        <div className='content'>
          <div className='cart'>
            <div className='header'>
              <span className='s1' onClick={ this.goback.bind(this) }></span>
              <p>购物车</p>
              <span className='s2'></span>
            </div>
            <div className='cont'>
              <ol>
                <dt>
                  <p></p>
                  <img src='/img/cart/cartshe.png'  alt=''/>
                  <span>girl福利社</span>
                </dt>
                <dd>
                  <span className='s1' onClick={this.add.bind(this)}  ref='xuan'></span>
                  <img src='/img/cart/cart1.png'  alt=''/>
                  <div className='info'>
                    <p>beauty buffet 牛奶净白</p>
                    <span className='s2'>100ML</span>
                    <div className='ded'>
                      <div className='span'>￥<span ref='price'>31</span></div>
                      <div className='right'>
                        <button className='btn1' onClick={this.jian.bind(this)}>-</button>
                        <span className='shuzi' ref='shuzi'>{this.state.num}</span>
                        <button className='btn2' onClick={this.jia.bind(this)}>+</button>
                      </div>
                    </div>
                  </div>
                </dd>
              </ol>
            </div>
            <div className='total'>
              <span className='checked'></span>
              <span className='s'>全选</span>
              <span className='s1'>不含运费</span>
              <p className='heji'>合计：<span className='price'>￥{ this.state.price }</span></p>
              <div className='jiesuan'>结算</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Com;