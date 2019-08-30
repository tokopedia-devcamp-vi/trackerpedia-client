import { ListItem, ListItemText, withStyles } from '@material-ui/core';
import DetailIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import { WithStyles } from '@material-ui/styles';
import { Order } from 'models';
import React from 'react';
import { styles } from './OrderCard-styles';

type Props = WithStyles<typeof styles> & {
  order: Order;
}

interface State { }

class OrderCard extends React.Component<Props, State> {
  render() {
    const { order } = this.props;
    return (
      <ListItem button onClick={() => { }}>
        <ListItemText
          primary={`Order #${order.id}`}
          secondary={order.item.name}
        />
        <DetailIcon fontSize="small" color="primary" />
      </ListItem>
    );
  }
}

export default withStyles(styles)(OrderCard);