import React, { Component } from 'react';
import { Tabs, Badge } from 'antd-mobile';

const tabs = [
  { title: <Badge>全部</Badge> },
  { title: <Badge>未付款</Badge> },
  { title: <Badge>已付款</Badge> },
  { title: <Badge>已完成</Badge> },
  { title: <Badge>已取消</Badge> },

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
          <span>我的订单</span>
        </header>
        <section className='content guanzhu' >
          <Tabs tabs={tabs}
            initialPage={0}
            // onChange={(tab, index) => { console.log('onChange', index, tab); }}
            // onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
          >
            <div style={{  margin:6 }}>
              <div className='quanbu'>
                您还没有订单哟
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