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
          <span></span>
          <p>首页</p>
        </NavLink>
        <NavLink to ='/mall'>
          <span></span>
          <p>商城</p>
        </NavLink>
        <NavLink to ='/photo'>
          <span></span>
          <p>拍照</p>
        </NavLink>
        <NavLink to ='/news'>
          <span></span>
          <p>消息</p>
        </NavLink>
        <NavLink to ='/user'>
          <span></span>
          <p>我的</p>
        </NavLink>
      </ul>
    </footer>
  </div>
)

export default App;
