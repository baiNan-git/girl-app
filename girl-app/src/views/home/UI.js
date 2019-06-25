import React, { Component } from 'react';
import Search from '@/components/home/search';
import Tjprolist from '@/components/home/tj_prolist';
// import { Tabs } from 'antd-mobile';


class Com extends Component {
  render () {
    return(
      <div className= "box">
        <header className = "header">
          <img src = "/images/h1.png"  className = "img_src" alt=''/>      
        </header>
        <section className = "content">
          <Search />
          <Tjprolist />
        </section>
      </div>
    )
  }
} 
      



export default Com;