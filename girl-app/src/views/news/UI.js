import React, { Component } from 'react';
import { Drawer, List, NavBar } from 'antd-mobile';
// class Com extends Component {
//   render () {
//     return(
//       <div className = 'box'>
//         <section className = 'content'>内容部分。头部不一样，有需要自己加</section>
//       </div>
//     )
//   }
// }
class Com extends Component {
  state = {
    open: false,
  }
  onOpenChange = (...args) => {
    this.setState({ open: !this.state.open });
  }
  render() {
    // fix in codepen
    const sidebar = (<List>
      <ul className= 'lei'>
        <h3 style={{
          fontWeight:400,
          paddingTop:10,
          marginTop:40,
        }}>更多</h3>
        <li>我的关注</li>
        <li>我的收藏</li>
        <li>我的草稿</li>
      </ul>
      <ul className= 'lei'>
        <li>购物车</li>
        <li>订单</li>
        <li>PlN卷</li>
        <li>心愿单</li>
        <li>pin会员卡</li>
      </ul>
      <ul className= 'lei' style={{
        borderBottom:0,
      }}>
        <li>帮助与客服</li>
        <li>设置</li>
      </ul>


    </List>
    );

    return (<div style={{
      position: "relative"
    }}>
      {/* <NavBar className="iconfont icon-caidan" onLeftClick={this.onOpenChange}>消息</NavBar> */}
      {/* <div className= 'box' style={{
        position:"absolute",
        top: 60,
        left: 10
      }}>
        <p>双方事故是的感受到方式</p>
        <p>双方事故是的感受到方式</p>
        <p>双方事故是的感受到方式</p>
        <p>双方事故是的感受到方式</p>
        
      </div> */}

      <Drawer
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight }}
        enableDragHandle
        contentStyle={{ color: '#A6A6A6', paddingTop: 0 }}
        sidebar={sidebar}
        open={this.state.open}
        onOpenChange={this.onOpenChange}
      >
        <div className='box-left'>
        <NavBar className="iconfont icon-caidan" onLeftClick={this.onOpenChange}>消息</NavBar>
          <p>收藏的赞和收藏</p>
          <p>收到的评论和@</p>
          <p>新增关注</p>
          <p>通知消息</p>
          <p style={{marginTop: 20}}>私信</p>
        </div>
      </Drawer>
    </div>);
  }
}



export default Com;