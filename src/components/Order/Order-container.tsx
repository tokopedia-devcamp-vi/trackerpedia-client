import React from 'react';
import OrderModel from 'models/Order';
import OrdersView from './Order-view';

interface Props {}

interface State {
  loading: boolean,
  order: OrderModel | null,
}

class Order extends React.Component<Props, State>{
  constructor(props: Props) {
    super(props);

    this.state = {
      loading: true,
      order: null,
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <OrdersView
        loading={this.state.loading}
        order={this.state.order}
      />
    );
  }
}

export default Order;