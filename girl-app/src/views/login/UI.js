import React, { Component } from 'react';

class Com extends Component {
  render () {
    return(
      <div className = 'box'>
        <section className = 'content'>
          <div className = 'login'>
            <div className = 'header'>
              <div className='menu'>菜单</div>
              <div className='in'>
                <span className='s1'>这是昵称</span>
                <span className='s2'>这是ID号：88888</span>
              </div>
              <div className='share'>分享</div>
            </div>
            <div className = 'cont'>
              <div className='cont-t'>
                <img className='img' src='' alt=''/>
                <div className='cont-r'>
                  <div className='cont-r-t'>
                    <div className=''>
                      <span>2</span>
                      <span>关注</span>
                    </div>
                  </div>
                  <div>个人资料</div>
                </div>
              </div>
              <div>
                <input type='text'/>
              </div>
              <div>
                <span>分享</span>
                <span>收藏</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Com;