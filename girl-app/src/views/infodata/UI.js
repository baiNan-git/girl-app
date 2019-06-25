import React, { Component } from 'react';

class Com extends Component {
  render () {
    return(
      <div className = 'box'>
        <section className = 'content'>
          <div className='infodata'>
            <div className='header'>
              <span></span>
              <p>设置</p>
            </div>
            <ul>
              <li><span>个人资料</span><i></i></li>
              <li><span>账户与安全</span><i></i></li>
            </ul>
            <ul>
              <li><span>我收到的赞</span><i></i></li>
              <li><span>新消息通知</span><i></i></li>
            </ul>
            <ul>
              <li><span>隐私</span><i></i></li>
              <li className='te'><span>通用</span><i></i></li>
              <li><span>意见反馈</span><i></i></li>
            </ul>
            <div className='infologin'>登陆账户</div>
          </div>
        </section>
      </div>
    )
  }
}

export default Com;