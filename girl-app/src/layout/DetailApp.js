import React from 'react';
import Detail from '@/views/detail';
import { Switch, Route} from 'react-router-dom';

const Com = () => (
  <Switch>
    <Route path = '/detail' component = { Detail }/>
  </Switch>
)
export default Com;