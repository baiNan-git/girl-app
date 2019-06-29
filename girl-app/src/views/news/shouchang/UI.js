import React, { Component } from 'react';
import { Tabs, Badge } from 'antd-mobile';

const tabs = [
  { title: <Badge>所有收藏</Badge> },
  { title: <Badge>我的专辑</Badge> }
];



class Com extends Component {
  goBack () {
    this.props.history.go(-1)
  }
  render() {
    return (
      <div className='guan'>
        <header className='guan-header'>
          <i className='iconfont icon-fanhui' onClick = {this.goBack.bind(this)}></i>
          <span>我的关注</span>
        </header>
        <section className='content guanzhu' >
          <Tabs tabs={tabs}
            initialPage={0}
            // onChange={(tab, index) => { console.log('onChange', index, tab); }}
            // onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
          >
            <div style={{  marginTop:5 }}>
              <div className='shouchang'>
                <ul>
                <li>
                    <div className= 'shou-t'>
                      <img src={require('@/views/news/news-img/ping1.png')} alt="" />
                      <p>秋季穿搭：提前转怀好羽绒服</p>
                      <p>是不是大多数妹纸的想法</p>
                    </div>
                    <div className= 'shou-b'>
                      <div className= 'shou-t-l'>
                        <img src={require('@/views/news/news-img/pingtou.png')} alt="" />
                        <span>大姐姐</span>
                      </div>
                      <div className= 'shou-t-r'>
                        <img src={require('@/views/news/news-img/hongxin.png')} alt="" />
                        <span>123</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className= 'shou-t'>
                      <img src={require('@/views/news/news-img/ping1.png')} alt="" />
                      <p>秋季穿搭：提前转怀好羽绒服</p>
                      <p>是不是大多数妹纸的想法</p>
                    </div>
                    <div className= 'shou-b'>
                      <div className= 'shou-t-l'>
                        <img src={require('@/views/news/news-img/tou3.png')} alt="" />
                        <span>小妮子</span>
                      </div>
                      <div className= 'shou-t-r'>
                        <img src={require('@/views/news/news-img/heixin.png')} alt="" />
                        <span>13</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className= 'shou-t'>
                      <img src={require('@/views/news/news-img/ping1.png')} alt="" />
                      <p>秋季穿搭：提前转怀好羽绒服</p>
                      <p>是不是大多数妹纸的想法</p>
                    </div>
                    <div className= 'shou-b'>
                      <div className= 'shou-t-l'>
                        <img src={require('@/views/news/news-img/tou2.png')} alt="" />
                        <span>宝龙小姐姐</span>
                      </div>
                      <div className= 'shou-t-r'>
                        <img src={require('@/views/news/news-img/hongxin.png')} alt="" />
                        <span>43</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className= 'shou-t'>
                      <img src={require('@/views/news/news-img/ping1.png')} alt="" />
                      <p>秋季穿搭：提前转怀好羽绒服</p>
                      <p>是不是大多数妹纸的想法</p>
                    </div>
                    <div className= 'shou-b'>
                      <div className= 'shou-t-l'>
                        <img src={require('@/views/news/news-img/tou1.png')} alt="" />
                        <span>小妮子</span>
                      </div>
                      <div className= 'shou-t-r'>
                        <img src={require('@/views/news/news-img/hongxin.png')} alt="" />
                        <span>69</span>
                      </div>
                    </div>
                  </li>
                  
                </ul>
              </div>
            </div>
            <div style={{ display: 'flex',  height: '289px', backgroundColor: '#fff',margin:6  }}>
              Content of second tab
            </div>
           
          </Tabs>
        </section>
      </div>
    )
  }
}


export default Com;