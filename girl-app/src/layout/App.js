import React from 'react';
import Home from '@/views/home';
import Mall from '@/views/mall';
import Photo from '@/views/photo';
import News from '@/views/news';
import User from '@/views/user';
import { Switch, Route, NavLink, Redirect} from 'react-router-dom';

const App = () => (
  <div className ='container'>
    <Switch>
      <Route path = '/home' component = { Home }/>
      <Route path = '/mall' component = { Mall }/>
      <Route path = '/photo' component = { Photo }/>
      <Route path = '/news' component = { News }/>
      <Route path = '/user' component = { User }/>
      <Redirect to = '/home'/>
    </Switch>
    <footer className = 'footer'>
      <ul>
        <NavLink to ='/home'>
          <p>首页</p>
        </NavLink>
        <NavLink to ='/mall'>
          <p>商城</p>
        </NavLink>
        <NavLink to ='/photo'>
          <img src='/shopimg/jia.png' alt=''/>
        </NavLink>
        <NavLink to ='/news'>
          <p>消息</p>
        </NavLink>
        <NavLink to ='/detail/user'>
          <p>我的</p>
        </NavLink>
      </ul>
    </footer>
  </div>
)

export default App;
