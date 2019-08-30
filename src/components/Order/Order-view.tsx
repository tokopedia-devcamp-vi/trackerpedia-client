import React from 'react';
import OrderModel from 'models/Order';
import { UserContext } from 'context/user';
import { Redirect } from 'react-router';

interface Props {
  loading: boolean;
  order: OrderModel | null;
}

class Order extends React.Component<Props> {
  static contextType = UserContext;

  render() {
    const { role } = this.context;

    if(role === 'driver') {
      return <Redirect to='/delivery' />
    }

    if(this.props.loading){
      return <div>Loading</div>
    }

    return (
      <div>Order</div>
    );
  }
}

export default Order;