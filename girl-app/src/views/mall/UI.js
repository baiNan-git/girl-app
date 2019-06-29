import React, { Component } from 'react';
import Search from '@/components/shop/Search1';
import { Tabs } from 'antd-mobile';
import Shoplist from '@/components/shop/Shoplist';
import Shoplist1 from '@/components/shop/Shoplist1';
import Shoplist2 from '@/components/shop/Shoplist2';

class Com extends Component {
  constructor (props) {
    super(props);
    this.state = {
      activeIndex: 0,
      tabs: [
        { title: '推荐' },
        { title: '护肤' },
        { title: '彩妆' },
      ]
    }
  }
  componentDidMount () {
    // console.log(this.props.getbannerlist())
    this.props.getbannerlist()
    this.props.getShoplist()
  }
  renderContent () {
    // return (
    // <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
    //   <p>Content of {this.state.tabs.title}</p>
    // </div>
    // )
    let ta = <div>还没有数据</div>
    if (this.state.activeIndex === 0) {
      ta = <Shoplist bannerlist = { this.props.bannerlist } { ...this.props } shoplist = { this.props.shoplist } />
    } else if (this.state.activeIndex === 1) {
      ta = <Shoplist1 />
    } else {
      ta = <Shoplist2 />
    }
    // this.state.activeIndex === 0 ? ta = <Shoplist bannerlist = { this.props.bannerlist } { ...this.props } shoplist = { this.props.shoplist } /> : ta = <div></div>;
    // this.state.activeIndex === 1 ? ta = <Shoplist1 /> : ta = <div></div>;
    // this.state.activeIndex === 2 ? ta = <Shoplist2 /> : ta = <div></div>;
    return ta
  }
  
  TabClick (tabs, index) {
    // console.log('1')
    console.log(index)
    this.setState ({
      activeIndex: index
    })
    // console.log(activeIndex)
  }
  goSearch () {
    this.props.history.push('/detail/search')
  }
  render () {
    return(
      <div className = 'box'>
        <div className = 'shop-content'>
          <Search goSearch={ this.goSearch.bind(this) }/>
          <div className = 'content-z'>
            <Tabs tabs={this.state.tabs} 
            onClick = { this.TabClick.bind(this) }
            onChange = { this.TabClick.bind(this) }
            tabBarActiveTextColor = '#333'
            tabBarInactiveTextColor = '#999'
            renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}>
              {this.renderContent.bind(this)}
            </Tabs>
          </div>
        </div>
      </div>
    )
  }
}

export default Com;