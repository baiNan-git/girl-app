import React, { Component } from 'react';


class Com extends Component {
  render () {
    return(
      <div className = 'box'>
        <div className='content'>
          <div className='main-search'>
            <div className='header'>
              <div className='left'>
                <input type='text' defaultValue='大家都在搜"夏日清新装扮"'/>
              </div>
              <div className='right'>取消</div>
            </div>
            <div className='search-box'>
              <div className='translate'>
                <div className='top'>
                  <span className='s1'>历史纪录</span>
                  <span className='s2'></span>
                </div>
                <div className='cont'>
                  <span>复古妆容</span>
                </div>
              </div>
              <div className='hotsearch'>
                <div className='top1'>
                  <span className='s1'>热门搜索</span>
                  <span className='s3'></span>
                </div>
                <div className='cont'>
                  <span>豆沙色口红</span> 
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