import React, { Component } from 'react';
import Shoptabs1 from '@/components/shop/Shoptabs1';
import Shoptabs2 from '@/components/shop/Shoptabs2';
import Shoptabs3 from '@/components/shop/Shoptabs3';
import Shoptabs4 from '@/components/shop/Shoptabs4';

class Com extends Component {
  constructor (props) {
    super(props);
    this.state = {
      activeIndex: 0
    }
  }
  // rendercontent () {
  //   let ta = <div></div>
  //   if (this.state.activeIndex ===0 ) {
  //     ta = <Shoptabs1 />
  //   } else if (this.state.activeIndex ===1) {
  //     ta = <Shoptabs2 />
  //   } else if (this.state.activeIndex ===2) {
  //     ta = <Shoptabs3 />
  //   } else {
  //     ta = <Shoptabs4 />
  //   }
  //   return ta
  // }
  render () {
    let ta = <Shoptabs1 />
    if (this.state.activeIndex === 0 ) {
      ta = <Shoptabs1 />
    } else if (this.state.activeIndex === 1) {
      ta = <Shoptabs2 />
    } else if (this.state.activeIndex === 2) {
      ta = <Shoptabs3 />
    } else {
      ta = <Shoptabs4 />
    }
    return(
      <div className='box'>
        <section className='content'>
          <div className='inndetail'>
            <div className='header'>
              <span className='back'></span>
              <span className='more'></span>
            </div>
            <div className='banner'>
              <img src='/shopdetail/innbanner.png' alt=''/>
            </div>
            <div className='title'>兰蔻1935年诞生于法国，是由Armand Petitjean(阿曼达·珀蒂让)创办的品牌。作为全球知名的高端化妆品品牌，兰蔻涉足护肤、彩妆、香水等多个产品领域。</div>
            <div className='choice'>
              <button className='home' onClick={ () => {
                this.setState({activeIndex:0})
              }}>首页</button>
              <button className='atlas' onClick={ () => {
                this.setState({activeIndex:1})
              }}>图集</button>
              <button className='note' onClick={ () => {
                this.setState({activeIndex:2})
              }}>笔记</button>
              <button className='comm' onClick={ () => {
                this.setState({activeIndex:3})
              }}>商品</button>
            </div>
            { ta }
          </div>
        </section>
      </div>
    )
      
  }
}

export default Com;