import React from 'react';
import { WithStyles, withStyles } from '@material-ui/styles';
import { styles } from './DeliveryTracker-styles';
import { Delivery } from 'models';
import { Stepper, Step, StepLabel, CardContent, Card, Typography } from '@material-ui/core';
import { OrderStatus } from 'models/Order';

type Props = WithStyles<typeof styles> & {
  delivery: Delivery;
}

interface State {
  delivery: Delivery;
  complete: boolean;
}

class DeliveryTracker extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { delivery: props.delivery, complete: false };
  }

  render() {
    const { classes } = this.props;
    const { cities, order } = this.state.delivery;
    return (
      <Card className={classes.root}>
        <CardContent className={classes.content}>
          <Stepper activeStep={order.status === OrderStatus.DELIVERED ? cities.length : cities.length - 1}
            orientation="vertical">
            {cities.map((city, idx) => (
              <Step key={idx}>
                <StepLabel>
                  {city.city}<br />
                  <Typography variant="caption">{city.time.toISOString()}</Typography>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(DeliveryTracker);