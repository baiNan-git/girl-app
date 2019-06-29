import React from 'react';
import Detail from '@/views/detail';
import Nologin from '@/views/nologintel';
import User from '@/views/user';
import Code from '@/views/code';
import Infodata from '@/views/infodata';
import Shopdetail from '@/views/shopdetail';
import Search from '@/views/search';
import { Switch, Route} from 'react-router-dom';

const Com = () => (
  <Switch>
    <Route path = '/detail/search' component = { Search }/>
    <Route path = '/detail/shopdetail' component = { Shopdetail }/>
    <Route path = '/detail/nologintel' component = { Nologin }/>
    <Route path = '/detail/Infodata' component = { Infodata }/>
    <Route path = '/detail/user' component = { User }/>
    <Route path = '/detail/code' component = { Code }/>
    <Route path = '/detail' component = { Detail }/>
  </Switch>
)
export default Com;