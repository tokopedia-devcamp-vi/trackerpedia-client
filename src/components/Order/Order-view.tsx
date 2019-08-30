import React from 'react';
import OrderModel from 'models/Order';

interface Props {
  loading: boolean;
  order: OrderModel | null;
}

class Order extends React.Component<Props> {
  render() {
    const { loading, order } = this.props;
    if(this.props.loading){
      return <div>Loading</div>
    }

    return (
      <div>Order</div>
    );
  }
}

export default Order;