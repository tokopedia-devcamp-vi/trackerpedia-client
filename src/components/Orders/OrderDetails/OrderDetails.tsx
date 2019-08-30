import { Typography } from '@material-ui/core';
import { WithStyles, withStyles } from '@material-ui/styles';
import DeliveryTracker from 'components/Delivery/DeliveryStatus/DeliveryTracker';
import OrderDetailCard from 'components/OrderDetailCard';
import { UserContext } from 'context/user';
import { get } from 'lodash';
import { Delivery } from 'models';
import { OrderStatus as Status } from 'models/Order';
import React from 'react';
import { Redirect, RouteComponentProps, withRouter } from 'react-router';
import RoutePaths from 'routes/routes';
import OrderStatus from '../OrderStatus';
import { styles } from './OrderDetails-styles';

type Props = WithStyles<typeof styles> & RouteComponentProps<{}> & {

}

interface State {
  loading: boolean;
  delivery?: Delivery | null;
}

class OrderDetails extends React.Component<Props, State> {
  static contextType = UserContext;

  constructor(props: Props) {
    super(props);

    this.state = {
      loading: true,
      delivery: null,
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const { delivery } = this.state;
    if (delivery) return;

    this.setState({ loading: true });
    const deliveryData = await Delivery.getById(get(match, 'params.id') || '');
    this.setState({ loading: false, delivery: deliveryData });
  }

  render() {
    const { role } = this.context;
    if (role === 'driver') {
      return <Redirect to={RoutePaths.DELIVERY} />;
    }

    if (this.state.loading) {
      return <Typography>Fetching data...</Typography>;
    }

    const { delivery } = this.state;

    if (!delivery) {
      return <Typography>Order not found</Typography>;
    }

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <OrderDetailCard order={delivery.order} />
        <OrderStatus status={delivery.order.status} />
        {delivery.order.status !== Status.PENDING && <DeliveryTracker delivery={delivery} />}
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(OrderDetails));