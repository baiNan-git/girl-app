import React from 'react';
import Detail from '@/views/detail';
import Nologin from '@/views/nologintel';
import Login from '@/views/login';
import User from '@/views/user';
import Code from '@/views/code';
import { Switch, Route} from 'react-router-dom';

const Com = () => (
  <Switch>
    <Route path = '/detail/login' component = { Login }/>
    <Route path = '/detail/nologintel' component = { Nologin }/>
    <Route path = '/detail/user' component = { User }/>
    <Route path = '/detail/code' component = { Code }/>
    <Route path = '/detail' component = { Detail }/>
  </Switch>
)
export default Com;