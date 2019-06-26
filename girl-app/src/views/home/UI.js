import React, { Component } from 'react';
// import Tj_prolist from '@/components/home/tj_prolist';
// import { Tabs } from 'antd-mobile';
import Tab1 from '@/components/home/Tab1'
import Tab2 from '@/components/home/Tab2'
import Tab3 from '@/components/home/Tab3'
class Com extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activeIndex: 1
    }
  }
  render () {
    let tab = <Tab1 />
    if (this.state.activeIndex === 0) {
      tab = <Tab1 />
    } else  if (this.state.activeIndex === 1) {
      tab = <Tab2 />
    } else {
      tab = <Tab3 />
    }
    return(
      <div className= "box">
        <header className = "header">
          <div className = "img_src" >
            <img src = "images/h1.png" alt = ""  /> 
          </div>
          <div className = "home-prolist">
          <button className = "homes" onClick = { () => {
            this.setState({activeIndex: 0})
          }}>关注</button>
           <button className = "homes" onClick = { () => {
            this.setState({activeIndex: 1})
          }}>发现</button>             
           <button className = "homes" onClick = { () => {
            this.setState({activeIndex: 2})
          }}>附近</button>     
          </div>
        </header>
        <section className = "content">
        { tab }
        </section>
      </div>
    )
  }
}      

export default Com;