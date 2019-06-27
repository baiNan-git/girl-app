import React, { Component } from 'react';

class Com extends Component {
  render () {
    return(
      <div className = 'box'>
        <section className = 'content'>
          <div className='skin'>
            <ul className = 'skin-prolist'>
              <li>
                <div className = 'img'>
                  <img src='/shopimg/skin1.png' alt='' />
                </div>
                <div className = 'title'>
                  <h4>日本进化肌底修复</h4>
                  <p>舒缓调理净化肌肤</p>
                  <span>￥256</span>
                </div>
              </li>
              <li>
                <div className = 'img'>
                  <img src='/shopimg/skin1.png' alt='' />
                </div>
                <div className = 'title'>
                  <h4>日本进化肌底修复</h4>
                  <p>舒缓调理净化肌肤</p>
                  <span>￥256</span>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}

export default Com;