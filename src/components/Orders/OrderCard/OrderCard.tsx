import { ListItem, ListItemText, withStyles } from '@material-ui/core';
import DetailIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import { WithStyles } from '@material-ui/styles';
import { Order } from 'models';
import React from 'react';
import { styles } from './OrderCard-styles';
import { RouteComponentProps, withRouter } from 'react-router';

type Props = WithStyles<typeof styles> & RouteComponentProps<{}> & {
  order: Order;
}

interface State { }

class OrderCard extends React.Component<Props, State> {
  handleClick(id: string) {
    this.props.history.push(`/orders/${id}`)
  }

  render() {
    const { order } = this.props;
    return (
      <ListItem button onClick={() => this.handleClick(order.id.toString())}>
        <ListItemText
          primary={`Order #${order.id}`}
          secondary={order.item.name}
        />
        <DetailIcon fontSize="small" color="primary" />
      </ListItem>
    );
  }
}

export default withStyles(styles)(withRouter(OrderCard));