import React, { Component } from 'react';
import Search from '@/components/home/search';
import Tj_prolist from '@/components/home/tj_prolist';
import { Tabs } from 'antd-mobile';


class Com extends Component {
  render () {
    return(
      <div className= "box">
        <header className = "header">
          <img src = "images/h1.png"  className = "img_src" />      
        </header>
        <section className = "content">
          <Search />
          <Tj_prolist />
        </section>
      </div>
    )
  }
} 
      



export default Com;