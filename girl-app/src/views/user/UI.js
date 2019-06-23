import React, { Component } from 'react';

class Com extends Component {
  render () {
    return(
      <div className = 'box'>
        <section className = 'content'>
        <div className = 'nologin'>
            <div className = 'back'>
              <span>返回</span>
            </div>
            <div className = 'from'>
              <h4>手机密码登陆</h4>
              <input type = 'text' placeholder = '请输入手机号'/>
              <input type = 'password' placeholder = '请输入密码'/>
              <button>登陆</button>
              <div className = 'option'>
                <span className = 's1'>忘记密码</span>
                <span className = 's2'>验证码登陆</span>
              </div>
              <div className = 'link'>
                <h5>第三方登录</h5>
                <div className = 'link-c'>
                  <span>微信</span>
                  <span>QQ</span>
                  <span>微博</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Com;