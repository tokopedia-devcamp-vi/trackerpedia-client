import { Card, CardContent, Divider, List, Typography } from '@material-ui/core';
import { WithStyles, withStyles } from '@material-ui/styles';
import OrderModel, { OrderStatus } from 'models/Order';
import React from 'react';
import { Redirect } from 'react-router';
import OrderCard from './OrderCard';
import { styles } from './Orders-styles';

type Props = WithStyles<typeof styles> & {}

interface State {
  loading: boolean,
  orders?: OrderModel[] | null,
}

class Order extends React.Component<Props, State>{
  constructor(props: Props) {
    super(props);

    this.state = {
      loading: true,
      orders: null,
    }
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const orders = await OrderModel.getAll();
    this.setState({ loading: false, orders });
  }

  render() {
    const { role } = this.context;
    const { classes } = this.props;

    if (role === 'driver') {
      return <Redirect to='/delivery' />
    }

    if (this.state.loading) {
      return <div>Loading</div>
    }

    const { orders } = this.state;

    if (!orders) {
      return <Typography>Cannot load orders</Typography>
    }

    const orderDictionaries: { title: string, orders: OrderModel[] }[] = [
      {
        title: "ON THE WAY",
        orders: orders.filter(order => order.status === OrderStatus.SENT),
      }, {
        title: "PENDING",
        orders: orders.filter(order => order.status === OrderStatus.PENDING),
      }, {
        title: "COMPLETED",
        orders: orders.filter(order => order.status === OrderStatus.DELIVERED),
      }
    ];

    return (
      <div>
        {orderDictionaries.map((card, idx) => (
          <Card className={classes.card} key={idx}>
            <CardContent>
              <Typography variant="h6"><strong>{card.title}</strong></Typography>
            </CardContent>
            <List>
              {card.orders.map((order, idx) => (
                <React.Fragment key={idx}>
                  {idx > 0 && <Divider />}
                  <OrderCard order={order} />
                </React.Fragment>
              ))}
            </List>
          </Card>
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(Order);