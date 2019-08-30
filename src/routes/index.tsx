import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RoutePaths from './routes';
import Order from 'components/Order';
import Items from 'components/Items';
import Profile from 'components/Profile';

const Routes: React.FC = () => (
  <Switch>
    <Route path={RoutePaths.ORDER} component={Order} />
    <Route path={RoutePaths.DELIVERY} component={Order} />
    <Route path={RoutePaths.ITEMS} component={Items} />
    <Route path={RoutePaths.PROFILE} component={Profile} />
  </Switch>
)

export default Routes;