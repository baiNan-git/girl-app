import React, { Component } from 'react';
import { Tabs, Badge } from 'antd-mobile';

const tabs = [
  { title: <Badge>用户</Badge> },
  { title: <Badge>商家</Badge> },
  { title: <Badge>标签</Badge> },
  { title: <Badge>专辑</Badge> },

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
            <div style={{  margin:6 }}>
              <div className='yonghu'>
                <div className= 'yonghu-t'>
                  <i>你可能感兴趣的人</i>
                  <span>更多...</span>
                </div>
                <div className= 'yonghu-c'>
                    <ul>
                      <li>
                        <div className= 'yonghu-c-l'>
                          <img src={require('@/views/news/news-img/touxiang.png')} alt="" />
                          <div style= {{marginLeft:6}}>
                            <h3>皮卡丘</h3>
                            <span>你可能感兴趣的人</span>
                          </div>
                        </div>
                        <div className='yonghu-c-r'>关注</div>
                      </li>
                      <li>
                        <div className= 'yonghu-c-l'>
                          <img src={require('@/views/news/news-img/tou4.png')} alt="" />
                          <div style= {{marginLeft:6}}>
                            <h3>啦哇一</h3>
                            <span>你可能感兴趣的人</span>
                          </div>
                        </div>
                        <div className='yonghu-c-r'>关注</div>
                      </li>
                      <li>
                        <div className= 'yonghu-c-l'>
                          <img src={require('@/views/news/news-img/tou2.png')} alt="" />
                          <div style= {{marginLeft:6}}>
                            <h3>暴龙兽妹妹</h3>
                            <span>你可能感兴趣的人</span>
                          </div>
                        </div>
                        <div className='yonghu-c-r'>关注</div>
                      </li>
                    </ul>
                </div>
                         
              </div>
              <div className='yonghu'>
                <div className= 'yonghu-t'>
                  <i>我关注的好友</i>
                  <span>更多...</span>
                </div>
                <div className= 'yonghu-c'>
                    <ul>
                      <li>
                        <div className= 'yonghu-c-l'>
                          <img src={require('@/views/news/news-img/tou3.png')} alt="" />
                          <div style= {{marginLeft:6}}>
                            <h3>小姐姐</h3>
                            <span>你认识的人</span>
                          </div>
                        </div>
                        <div className='yonghu-c-r' style={{background:'#ec6b9b'}}>已关注</div>
                      </li>
                      <li>
                        <div className= 'yonghu-c-l'>
                          <img src={require('@/views/news/news-img/tou2.png')} alt="" />
                          <div style= {{marginLeft:6}}>
                            <h3>大姐姐</h3>
                            <span>你认识的人</span>
                          </div>
                        </div>
                        <div className='yonghu-c-r' style={{background:'#ec6b9b'}}>已关注</div>
                      </li>
                      <li>
                        <div className= 'yonghu-c-l'>
                          <img src={require('@/views/news/news-img/tou1.png')} alt="" />
                          <div style= {{marginLeft:6}}>
                            <h3>瑜伽</h3>
                            <span>你认识的人</span>
                          </div>
                        </div>
                        <div className='yonghu-c-r' style={{background:'#ec6b9b'}}>已关注</div>
                      </li>
                    </ul>
                </div>
                         
              </div>
            </div>
            <div style={{ display: 'flex',  height: '289px', backgroundColor: '#fff',margin:6  }}>
              Content of second tab
            </div>
            <div style={{ display: 'flex', height: '289px', backgroundColor: '#fff',margin:6  }}>
              Content of third tab
            </div>
            <div style={{ display: 'flex',  height: '289px', backgroundColor: '#fff' ,margin:6 }}>
              Content of t444tab
            </div>
          </Tabs>
        </section>
      </div>
    )
  }
}


export default Com;