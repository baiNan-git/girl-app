import React from 'react';
// import { Carousel } from 'antd-mobile';

const Com = ({ gotel, gohome }) => (
  <div className = 'nologin'>
    <div className = 'back'>
      <span onClick={gohome}>暂不登陆</span>
      <span onClick={gotel}>验证码登陆</span>
    </div>
    <div className = 'from'>
      <h4>密码登陆</h4>
      <div className = 'user'>
        <span>+86</span>
        <input type = 'text' placeholder = '请输入手机号'/>
      </div>
      <div className='pass'>
        <span></span>
        <input type = 'password' placeholder = '请输入密码'/>
      </div>
      <button>登陆</button>
      <div className = 'option'>
        <span className = 's1'>去注册</span>
        <span className = 's2'>忘记密码？</span>
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
)

export default Com;