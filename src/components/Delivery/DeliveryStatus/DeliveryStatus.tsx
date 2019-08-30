import { Button } from '@material-ui/core';
import Checkmark from '@material-ui/icons/CheckOutlined';
import Checkpoint from '@material-ui/icons/MyLocationOutlined';
import { withStyles, WithStyles } from '@material-ui/styles';
import OrderDetailCard from 'components/OrderDetailCard';
import { Delivery, Order } from 'models';
import React from 'react';
import { styles } from './DeliveryStatus-styles';
import DeliveryTracker from './DeliveryTracker';
import { OrderStatus } from 'models/Order';

type Props = WithStyles<typeof styles> & {
  delivery: Delivery;
}

interface State {

}

class DeliveryStatus extends React.Component<Props, State> {
  async handleUpdateStatus() {
    const { delivery } = this.props;
    const res = await Delivery.updateById(delivery.order.id);
    window.location.reload();
  }

  async handleCompleteDelivery() {
    const { delivery } = this.props;
    const res = await Order.updateStatusById(delivery.order.id, OrderStatus.DELIVERED);
    window.location.reload();
  }

  render() {
    const { classes, delivery } = this.props;
    const { cities } = delivery;
    return (
      <div className={classes.root}>
        <DeliveryTracker delivery={delivery} />
        <OrderDetailCard order={delivery.order} />
        <Button
          variant="contained" color="secondary" className={classes.button}
          onClick={this.handleUpdateStatus.bind(this)}
          disabled={cities[cities.length-1].next === false}>
          <Checkpoint fontSize={"small"} style={{ marginRight: 8 }} />Update checkpoint
        </Button>
        <Button
          variant="contained" color="primary" className={classes.button}
          onClick={this.handleCompleteDelivery.bind(this)}
          disabled={cities[cities.length-1].next === true}>
          <Checkmark fontSize={"small"} style={{ marginRight: 8 }} />Complete delivery
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(DeliveryStatus);