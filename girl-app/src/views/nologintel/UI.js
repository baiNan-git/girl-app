import React, { Component } from 'react';

class Com extends Component {
  gopass () {
    this.props.history.push('/detail/user')
  }
  gohome () {
    this.props.history.push('/')
  }
  getCode () {
    this.props.history.push('/detail/code')
  }
  render () {
    return(
      <div className = 'box'>
        <section className = 'content'>
          <div className = 'nologintel'>
            <div className = 'back'>
              <span onClick={this.gohome.bind(this)}>暂不登陆</span>
              <span onClick={this.gopass.bind(this)}>密码登录</span>
            </div>
            <div className = 'from'>
              <h4>手机验证码登陆</h4>
              <div className = 'user'>
                <span>+86</span>
                <input type = 'text' placeholder = '请输入手机号'/>
              </div>
              <button onClick={ this.getCode.bind(this) }>获取验证码</button>
              <div className = 'option'>
                <span className = 's1'>去注册</span>
                <span className = 's2'>没有收到验证码？</span>
              </div>
              <div className = 'link'>
                <div className='qi'>
                  <div className='xian'></div>
                  <h5>其他方式登陆</h5>
                  <div className='xian'></div>
                </div>
                <div className = 'link-c'>
                  <span className='s1'></span>
                  <span className='s2'></span>
                  <span className='s3'></span>
                </div>
              </div>
              <div className='xieyi'>登陆注册代表统一<i>用户协议</i>和<i>隐私政策</i></div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Com;