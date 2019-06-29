import React, { Component } from 'react';


class Com extends Component {
  goBack() {
    this.props.history.go(-1)
  }
  render() {
    return (
      <div className='guan'>
        <header className='guan-header'>
          <i className='iconfont icon-fanhui' onClick={this.goBack.bind(this)}></i>
          <span>客服中心</span>
        </header>
        <div className='bangzhu' >
          <div className='qwe'>
            1111
          </div>
        </div>
      </div>
    )
  }
}


export default Com;