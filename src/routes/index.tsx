import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RoutePaths from './routes';
import Order from 'components/Orders';
import Items from 'components/Items';
import Profile from 'components/Profile';
import Delivery from 'components/Delivery';
import OrderDetails from 'components/Orders/OrderDetails';

const Routes: React.FC = () => (
  <Switch>
    <Route path={RoutePaths.ORDER_DETAILS} component={OrderDetails} />
    <Route path={RoutePaths.ORDERS} exact component={Order} />
    <Route path={RoutePaths.DELIVERY} exact component={Delivery} />
    <Route path={RoutePaths.ITEMS} exact component={Items} />
    <Route path={RoutePaths.PROFILE} exact component={Profile} />
  </Switch>
)

export default Routes;