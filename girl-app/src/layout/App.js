import React from 'react';
import Home from '@/views/home';
import Mall from '@/views/mall';
import Photo from '@/views/photo';
import News from '@/views/news';
import User from '@/views/user';
import Guan from '@/views/news/guanzhu';
import Shou from '@/views/news/shouchang';
import Cao from '@/views/news/caogao';
import Juan from '@/views/news/pink';
import She from '@/views/infodata';
import { Switch, Route, NavLink, Redirect} from 'react-router-dom';

const App = () => (
  <div className ='container'>
    <Switch>
      <Route path = '/home' component = { Home }/>
      <Route path = '/mall' component = { Mall }/>
      <Route path = '/photo' component = { Photo }/>
      <Route path = '/news' component = { News }/>
      <Route path = '/user' component = { User }/>
      <Route path = "/guan" component = { Guan } />
      <Route path = "/shou" component = { Shou } />
      <Route path = "/cao" component = { Cao } />
      <Route path = "/juan" component = { Juan } />
      <Route path = "/she" component = { She } />
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
