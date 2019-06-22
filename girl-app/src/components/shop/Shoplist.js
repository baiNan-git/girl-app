import React from 'react';
// import Banner from '@/components/shop/Banner';
import Hot1 from '@/components/shop/Hot1';
import Hot2 from '@/components/shop/Hot2';
import Hot3 from '@/components/shop/Hot3';
import { Carousel } from 'antd-mobile';

class Com extends React.Component {
  constructor (props) {
    super(props)
    console.log(this.props)
  }
  render() {
    return (
      <div>
        <Carousel
          autoplay
          infinite
          style={{ display: 'block', width: '100%', height: 176 }}
        >
          {this.props.bannerlist.map((item, index) => (
            <a
              key={item.id}
              href="http://www.alipay.com"
              style={{ display: 'block', width: '100%', height: '100%' }}
            >
              <img
                src={item.imgSrc}
                alt=""
                style={{ width: '100%', verticalAlign: 'top', height: '100%' }}
              />
            </a>
          ))}
        </Carousel>
        <Hot1 />
        <Hot2 />
        <Hot3 />
        <div className = 'shop-prolist'>
          <ul>
            <li>
              <div className = 'img'>
                <img src='' alt='' />
              </div>
              <div className = 'title'>
                <h4>滋润丰盈肌肤神器</h4>
                <p>兰蔻精华修复肌底液</p>
                <span>￥200</span>
              </div>
            </li>
            <li>
              <div className = 'img'>
                <img src='' alt='' />
              </div>
              <div className = 'title'>
                <h4>滋润丰盈肌肤神器</h4>
                <p>兰蔻精华修复肌底液</p>
                <span>￥200</span>
              </div>
            </li>
            <li>
              <div className = 'img'>
                <img src='' alt='' />
              </div>
              <div className = 'title'>
                <h4>滋润丰盈肌肤神器</h4>
                <p>兰蔻精华修复肌底液</p>
                <span>￥200</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

    )
  }
}

export default Com;