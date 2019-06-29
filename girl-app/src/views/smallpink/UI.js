import React, { Component } from 'react';



class Com extends Component {
  goback () {
    this.props.history.push('/mall')
  }
  goshopdetail () {
    this.props.history.push('/detail/shopdetail')
  }
  render () {
    return (
      <div className='box'>
        <div className='smallpink'>
          <div className='header'>
            <span className='s1' onClick={this.goback.bind(this)}></span>
            <span className='s2'>精选粉店</span>
            <span className='s3'></span>
          </div>
          <div className='cont'>
            <div className='img1'>
              <img src='/smallpink/pinkbanner.png' alt=''/>
              <img className='le' src='/smallpink/pinkle.png' alt=''/>
            </div>
            <div className='bao'>
              <div className='dian1'>
                <div  className='left'>
                  <img src='/smallpink/pinkdian1.png' alt=''/>
                  <div className='left-r'>
                    <span>叁木 原创店铺</span>
                    <p>好评100%</p>
                  </div>
                </div>
                <div className='right' onClick={ this.goshopdetail.bind(this) }>
                  <img src='/smallpink/pinkjin.png' alt=''/>
                </div>
              </div>
              <div className='img2'>
                <div className='left'>
                  <img src='/smallpink/pinkzu2.png' alt=''/>
                </div>
                <div className='right'>
                  <div className='top'>
                    <img src='/smallpink/pinkzu2-3.png' alt=''/>
                    <img src='/smallpink/pinkzu2-1.png' alt=''/>
                  </div>
                  <div className='bottom'>
                    <img src='/smallpink/pinkzu2-2.png' alt=''/>  
                    <img src='/smallpink/pinkzu2-1.png' alt=''/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Com;