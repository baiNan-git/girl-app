import React from 'react';
import Search from '@/components/home/search';
import Tabs1 from '@/components/home/Tabs1';
import Tabs2 from '@/components/home/Tabs2';
import Tabs3 from '@/components/home/Tabs3';
import Tabs4 from '@/components/home/Tabs4';


class App extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        activeIndexs: 0
      }
    }
    render(){
      let tab = <Tabs1 />
      if (this.state.activeIndexs === 0) {
        tab = <Tabs1 />
      } else  if (this.state.activeIndexs === 1) {
        tab = <Tabs2 />
      } else if (this.state.activeIndexs === 2) {
        tab = <Tabs3 />
      } else {
        tab = <Tabs4 />
      }
      // console.log(this.state.activeIndexs)
      return(
        <div >
          <Search />
          <div className = "find-prolist"> 
          <button className = "find" onClick = { () => {
            this.setState({activeIndexs: 0})
          }}>推荐</button>
           <button className = "find" onClick = { () => {
            this.setState({activeIndexs: 1})
          }}>彩妆</button>
           <button className = "find" onClick = { () => {
            this.setState({activeIndexs: 2})
          }}>护肤</button>
           <button className = "find" onClick = { () => {
            this.setState({activeIndexs: 3})
          }}>视频</button>
          </div>
          { tab }
          <Tabs2 />
        </div>
      )
    }
}

export default App;

