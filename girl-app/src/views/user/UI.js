import React, { Component } from 'react';
import Nologinpass from '@/components/login/Nologinpass';
import Login from '@/components/login/Login';

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
  goInfodata () {
    this.props.history.push('/detail/infodata')
  }
  componentDidMount () {
    console.log(localStorage)
    if (sessionStorage.islogin ==='ok') {
      this.setState({
        login: true
      })
    } 
  }
  render () {
    return(
      <div className = 'box'>
        <section className = 'content'>
          {
            this.state.login === true ? <Login goInfodata = { this.goInfodata.bind(this) } {...this.props}/>
            : <Nologinpass gotel={ this.gotel.bind(this) } gohome={ this.gohome.bind(this) } {...this.props} />
          }
        </section>
      </div>
    )
  }
}

export default Com;