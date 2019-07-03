import React from 'react';

class Com extends React.Component {
  constructor (props) {
    super(props)
    console.log(this.props)
    this.state = {
      username: '',
      password: '',
      // tips: document.querySelector('.tips').innerHTML

    }
  }
  // componentDidMount () {
  //   let username = document.querySelector('.username').defaultValue;
  //   let password = document.querySelector('.password').defaultValue;
    
  // }
  tologin () {
    let username = document.querySelector('.username').value;
    let password = document.querySelector('.password').value;
    // let tips = document.querySelector('.tips').innerHTML;
    if (!(/^1[3456789]\d{9}$/.test(username))) {
      document.querySelector('.tips').innerHTML = '手机格号式错误'
    } else if (!(/^(\w){6,20}$/.test(password))) {
      document.querySelector('.tips').innerHTML = "'密码格式错误，只能输入6-20个字母、数字、下划线"
    } else {
      sessionStorage.setItem('islogin', 'ok')
      this.props.history.push('/mall')
    }
  }
  render () {
    return (
      <div className = 'nologin'>
        <div className = 'back'>
          <span onClick={this.props.gohome.bind(this)}>暂不登陆</span>
          <span onClick={this.props.gotel.bind(this)}>验证码登陆</span>
        </div>
        <div className = 'from'>
          <h4>密码登陆</h4>
          <span className='tips'></span>
          <div className = 'user'>
            <span>+86</span>
            <input className='username' type = 'text' placeholder = '请输入手机号' defaultValue=''/>
          </div>
          <div className='pass'>
            <span></span>
            <input className='password' type = 'password' placeholder = '请输入密码' defaultValue={this.state.password}/>
          </div>
          <button className='login' onClick={this.tologin.bind(this)}>登陆</button>
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
          <div className='xieyi'>登陆注册代表同意<i>用户协议</i>和<i>隐私政策</i></div>
        </div>
      </div>

    )
  }
}
export default Com;