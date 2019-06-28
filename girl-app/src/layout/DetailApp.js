import React from 'react';
import Detail from '@/views/detail';
import Nologin from '@/views/nologintel';
import User from '@/views/user';
import Code from '@/views/code';
import Infodata from '@/views/infodata';
import Homedetail from '@/views/homedetail';
import { Switch, Route} from 'react-router-dom';


const Com = () => (
  <Switch>
    <Route path = '/detail/homedetail' component = { Homedetail }/>
    <Route path = '/detail/nologintel' component = { Nologin }/>
    <Route path = '/detail/Infodata' component = { Infodata }/>
    <Route path = '/detail/user' component = { User }/>
    <Route path = '/detail/code' component = { Code }/>
    <Route path = '/detail' component = { Detail }/>
  </Switch>
)
export default Com;