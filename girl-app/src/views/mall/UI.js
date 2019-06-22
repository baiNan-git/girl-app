import React, { Component } from 'react';
import Search from '@/components/shop/Search1';
import { Tabs } from 'antd-mobile';
import Shoplist from '@/components/shop/Shoplist';

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
  }
  renderContent () {
    // return (
    // <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
    //   <p>Content of {this.state.tabs.title}</p>
    // </div>
    // )
    let ta = <div>还没有数据</div>
    this.state.activeIndex === 0 ? ta = <Shoplist list = { this.props.bannerlist } { ...this.props } /> : ta = <div></div>;
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
  render () {
    return(
      <div className = 'box'>
        <div className = 'shop-content'>
          <Search />
          <div className = 'content-z'>
            <Tabs tabs={this.state.tabs} 
            onClick = { this.TabClick.bind(this) }
            onChange = { this.TabClick.bind(this) }
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