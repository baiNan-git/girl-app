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
        <section className='content' >
          <Tabs tabs={tabs}
            initialPage={0}
            // onChange={(tab, index) => { console.log('onChange', index, tab); }}
            // onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
          >
            <div style={{ display: 'flex',  height: '289px', backgroundColor: '#fff',margin:6 }}>
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
                          <div>
                            <h3>小姐姐</h3>
                            <span>你可能感兴趣的人</span>
                          </div>
                        </div>
                        <div className='yonghu-c-r'>关注</div>
                      </li>
                      <li>
                        <div className= 'yonghu-c-l'>
                          <img src={require('@/views/news/news-img/touxiang.png')} alt="" />
                          <div>
                            <h3>小姐姐</h3>
                            <span>你可能感兴趣的人</span>
                          </div>
                        </div>
                        <div className='yonghu-c-r'>关注</div>
                      </li>
                      <li>
                        <div className= 'yonghu-c-l'>
                          <img src={require('@/views/news/news-img/touxiang.png')} alt="" />
                          <div>
                            <h3>小姐姐</h3>
                            <span>你可能感兴趣的人</span>
                          </div>
                        </div>
                        <div className='yonghu-c-r'>关注</div>
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