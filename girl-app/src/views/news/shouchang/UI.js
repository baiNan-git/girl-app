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
            <div style={{  marginTop:16 }}>
              <div className='shouchang'>
                <ul>
                <li>
                    <div className= 'shou-t'>
                    <img src={require('@/views/news/news-img/ping1.png')} alt="" />
                    <p>秋季穿搭：提前转怀好羽绒服</p>
                    <p>是不是大多数妹纸的想法</p>
                    </div>
                    <div className= 'shou-b'></div>
                  </li>
                  <li>
                    <div className= 'shou-t'>
                    <img src={require('@/views/news/news-img/ping1.png')} alt="" />
                    <p>秋季穿搭：提前转怀好羽绒服</p>
                    <p>是不是大多数妹纸的想法</p>
                    </div>
                    <div className= 'shou-b'></div>
                  </li>
                  <li>
                    <div className= 'shou-t'>
                    <img src={require('@/views/news/news-img/ping1.png')} alt="" />
                    <p>秋季穿搭：提前转怀好羽绒服</p>
                    <p>是不是大多数妹纸的想法</p>
                    </div>
                    <div className= 'shou-b'></div>
                  </li>
                  <li>
                    <div className= 'shou-t'>
                    <img src={require('@/views/news/news-img/ping1.png')} alt="" />
                    <p>秋季穿搭：提前转怀好羽绒服</p>
                    <p>是不是大多数妹纸的想法</p>
                    </div>
                    <div className= 'shou-b'></div>
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