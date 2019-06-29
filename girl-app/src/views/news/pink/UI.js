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
          <span>Pink卷</span>
        </header>
        <section className='content juan' >
          <ul>
            <li>
              很遗憾您还没有pink卷
            </li>
          </ul>
        </section>
      </div>
    )
  }
}


export default Com;