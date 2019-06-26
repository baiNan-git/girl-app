import React, { Component } from 'react';
import Nologinpass from '@/components/login/Nologinpass';

class Com extends Component {
  constructor (props) {
    super(props);
    this.state = {
      login: false
    }
  }
  gotel () {
    this.props.history.push('/detail/nologintel')
  }
  gohome () {
    this.props.history.push('/')
  }
  render () {
    return(
      <div className = 'box'>
        <section className = 'content'>
          {
            this.state.login === true ? <div>还没有数据</div> : <Nologinpass gotel={ this.gotel.bind(this) } gohome={ this.gohome.bind(this) }/>
          }
        </section>
      </div>
    )
  }
}

export default Com;