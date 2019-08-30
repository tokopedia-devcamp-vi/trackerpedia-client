import React from 'react';
import { WithStyles, withStyles } from '@material-ui/styles';
import { styles } from './OrderDetailCard-styles';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import { Order } from 'models';

type Props = WithStyles<typeof styles> & {
  order: Order;
}

class OrderDetails extends React.Component<Props> {
  render() {
    const { classes, order } = this.props;
    return (
      <Card className={classes.root}>
        <CardContent>
          <Typography style={{ fontWeight: 'bolder' }} gutterBottom>Order #{order.id}</Typography>
          <Grid container>
            <Grid item xs={4}><strong>Item</strong></Grid>
            <Grid item xs={8}>{order.item.name}</Grid>
            <Grid item xs={4}><strong>Weight</strong></Grid>
            <Grid item xs={8}>{order.item.weight} kg</Grid>
            <Grid item xs={4}><strong>Destination</strong></Grid>
            <Grid item xs={8}>{order.destination}</Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(OrderDetails);