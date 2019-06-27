import React from 'react';
// import { Carousel } from 'antd-mobile';

const Com = ({ goInfodata }) => (
  <div className = 'login'>
    <div className = 'header'>
      <div className='menu'></div>
      <div className='in'>
        <span className='s1'>戏精姐姐呀</span>
        <span className='s2'>ID：8888888</span>
      </div>
      <div className='share'></div>
    </div>
    <div className = 'cont'>
      <div className='cont-t'>
        <div className='cont-r'>
          <img className='img' src='/user/head.png' alt=''/>  
          <div className='cont-r-t'>
            <div className='top'>
              <div className='num'>
                <span className='number'>2</span>
                <span>关注</span>
              </div>
              <div className='num'>
                <span className='number'>2</span>
                <span>粉丝</span>
              </div>
              <div className='num'>
                <span className='number'>2</span>
                <span>获赞</span>
              </div>
            </div>
            <div className='bottom' onClick={ goInfodata }>个人资料</div>
          </div>
        </div>
        <div className='say'>
          <input type='text' placeholder='来，说点什么吧' />
        </div>
      </div>
      <div className='coll'>
        <span className='s1'>分享</span>
        <span className='s2'>收藏</span>
      </div>
    </div>
  </div>
)

export default Com;