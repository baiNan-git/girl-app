import React, { Component } from 'react';
import { Drawer, List, NavBar } from 'antd-mobile';
import {  NavLink } from 'react-router-dom';
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
        <NavLink to ='/guan'><img src={require('@/views/news/news-img/yan.png')} alt="" style={{paddingRight:0}}/> 我的关注</NavLink>
        <NavLink to ='/shou'><img src={require('@/views/news/news-img/aixin.png')} alt="" />我的收藏</NavLink>
        <NavLink to =''><img src={require('@/views/news/news-img/wenjianjia.png')} alt="" />我的草稿</NavLink>
      </ul>
      <ul className= 'lei'>
        <NavLink to ='/an'><img src={require('@/views/news/news-img/gouwuche.png')} alt="" />购物车</NavLink>
        <NavLink to =''><img src={require('@/views/news/news-img/shuye.png')} alt="" />订单</NavLink>
        <NavLink to =''><img src={require('@/views/news/news-img/qian.png')} alt="" />PlN卷</NavLink>
        <NavLink to =''><img src={require('@/views/news/news-img/aixin.png')} alt="" />心愿单</NavLink>
        <NavLink to =''><img src={require('@/views/news/news-img/vip.png')} alt="" />pin会员卡</NavLink>
      </ul>
      <ul className= 'lei' style={{
        borderBottom:0,
      }}>
        <NavLink to =''><img src={require('@/views/news/news-img/erji.png')} alt="" />帮助与客服</NavLink>
        <NavLink to ='/she'><img src={require('@/views/news/news-img/wenhao.png')} alt="" />设置</NavLink>
      </ul>


    </List>
    );

    return (<div style={{
      position: "relative"
    }}>
      

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
          <ul className = 'xiao'>
            <li>
                <img src={require('@/views/news/news-img/p1.png')} alt="" />
                <p>赞和收藏</p>
              </li>
              <li>
                <img src={require('@/views/news/news-img/ren.png')} alt="" />
                <p>新增关注</p>
              </li>
              <li>
                <img src={require('@/views/news/news-img/weixin.png')} alt="" />
                <p>评论和@</p>
            </li>
          </ul>
          <ul className = 'xiao2'>
            <li>
              <img src={require('@/views/news/news-img/ling.png')} alt="" />
              <div>
                <h3>通知消息</h3>
                <span>新功能上线，请查收</span>
              </div>
            </li>
            <li>
              <img src={require('@/views/news/news-img/tou.png')} alt="" />
              <div>
                <h3>通知消息</h3>
                <span>新功能上线，请查收</span>
              </div>
            </li>
          </ul>
        </div>
      </Drawer>
    </div>);
  }
}



export default Com;