import React from 'react';
import Delivery from 'models/Delivery';
import OrdersView from './Order-view';

interface Props {}

interface State {
  loading: boolean,
  deliveries: Delivery[]
}

class Order extends React.Component<Props, State>{
  constructor(props: Props) {
    super(props);

    this.state = {
      loading: false,
      deliveries: [],
    }
  }

  render() {
    return (
      <OrdersView />
    );
  }
}

export default Order;