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
          <span>我的草稿</span>
        </header>
        <section className='content caogao' >
          <ul>
            <li>
              <img src={require('@/views/news/news-img/cao.png')} alt="" />
              <div>
                <h3>zara的这个T恤非常的好看</h3>
                <span>2019-6-23  14:37</span>
              </div>
            </li>
          </ul>
        </section>
      </div>
    )
  }
}


export default Com;