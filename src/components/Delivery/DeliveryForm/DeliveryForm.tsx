import { Button, Card, CardContent, Typography } from '@material-ui/core';
import Checkmark from '@material-ui/icons/CheckOutlined';
import { WithStyles, withStyles } from '@material-ui/styles';
import OrderDetails from 'components/OrderDetailCard';
import { Order } from 'models';
import React from 'react';
import { styles } from './DeliveryForm-styles';
import ReceiptInput from './ReceiptInput';

type Props = WithStyles<typeof styles> & {
  onSubmit?: () => void;
}

interface State {
  searched: boolean;
  order?: Order | null;
  loading: boolean;
}

class DeliveryForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searched: false,
      order: null,
      loading: false,
    }
  }

  async findOrder(id: string) {
    this.setState({ searched: true, loading: true });
    const order = await Order.getById(id);
    this.setState({ loading: false, order });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <ReceiptInput onSubmit={this.findOrder.bind(this)} loading={this.state.loading} />
        {this.state.order && <OrderDetails order={this.state.order} />}
        {this.state.searched && !this.state.loading && !this.state.order &&
          <Card className={classes.notFoundCard}>
            <CardContent style={{ padding: 16 }}>
              <Typography align={"center"}>
                <strong>Order not found :(</strong>
              </Typography>
            </CardContent>
          </Card>}
        <Button
          variant="contained" color="secondary" className={classes.button}
          disabled={!this.state.order || this.state.loading}>
          <Checkmark fontSize={"small"} style={{ marginRight: 8 }} />Accept order
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(DeliveryForm);