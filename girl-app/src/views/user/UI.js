import React, { Component } from 'react';
import Nologinpass from '@/components/login/Nologinpass';
import Login from '@/components/login/Login';

class Com extends Component {
  constructor (props) {
    super(props);
    this.state = {
      login: true
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
            this.state.login === true ? <Login /> : <Nologinpass gotel={ this.gotel.bind(this) } gohome={ this.gohome.bind(this) }/>
          }
        </section>
      </div>
    )
  }
}

export default Com;