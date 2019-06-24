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
  goDetail () {
    console.log(this.props)
    this.props.history.push('/detail')
  }
  render() {
    
    return (
      <div>
        <Carousel
          autoplay
          infinite
          style={{ display: 'block', width: '100%', height: 176 }}
        >
          {/* {this.props.bannerlist.map((item, index) => (  */}
            <a
              // key={index}
              href="http://www.alipay.com"
              style={{ display: 'block', width: '100%', height: '100%' }}
            >
              <img
                src='/shopimg/banner.png'
                alt=""
                style={{ width: '100%', verticalAlign: 'top', height: '100%' }}
              />
            </a>
          {/* ))} */}
        </Carousel>
        <Hot1 />
        <Hot2 />
        <Hot3 />
        <ul className = 'shop-prolist'>
          {
            this.props.shoplist.map((item, index) => {
              return (
                <li key = {index} onClick = { this.goDetail.bind(this) }>
                  <div className = 'img'>
                    <img src='/shopimg/shoplist1.png' alt='' />
                  </div>
                  <div className = 'title'>
                    <h4>{ item.title }</h4>
                    <p>{ item.name }</p>
                    <span>￥{ item.price }</span>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>

    )
  }
}

export default Com;