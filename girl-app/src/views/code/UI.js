import React, { Component } from 'react';

class Com extends Component {
  gopass () {
    this.props.history.push('/detail/user')
  }
  render () {
    return(
      <div className = 'box'>
        <section className = 'content'>
        <div className = 'nologincode'>
            <div className = 'from'>
              <h4 className='inputcode'>输入验证码</h4>
              <div className = 'user codeinput'>
                <input type = 'text' placeholder = '请输入验证码'/>
              </div>
              <button>确定</button>
              <div className = 'option'>
                <span className = 's1'>重新发送</span>
                <span className = 's2' onClick={this.gopass.bind(this)}>密码登陆</span>
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