import { Button } from '@material-ui/core';
import Checkmark from '@material-ui/icons/CheckOutlined';
import { withStyles, WithStyles } from '@material-ui/styles';
import OrderDetailCard from 'components/OrderDetailCard';
import { Delivery } from 'models';
import React from 'react';
import { styles } from './DeliveryStatus-styles';
import DeliveryTracker from './DeliveryTracker';

type Props = WithStyles<typeof styles> & {
  delivery: Delivery;
}

interface State {

}

class DeliveryStatus extends React.Component<Props, State> {
  render() {
    const { classes, delivery } = this.props;
    return (
      <div className={classes.root}>
        <DeliveryTracker delivery={delivery} />
        <OrderDetailCard order={delivery.order} />
        <Button
          variant="contained" color="primary" className={classes.button}>
          <Checkmark fontSize={"small"} style={{ marginRight: 8 }} />Complete delivery
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(DeliveryStatus);