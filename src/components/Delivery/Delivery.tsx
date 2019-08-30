import { Typography } from '@material-ui/core';
import { WithStyles } from '@material-ui/styles';
import { UserContext } from 'context/user';
import { Delivery as DeliveryModel } from 'models';
import React from 'react';
import { Redirect } from 'react-router';
import { styles } from './Delivery-styles';
import DeliveryForm from './DeliveryForm';

type Props = WithStyles<typeof styles> & {

}

interface State {
  loading: boolean;
  delivery?: DeliveryModel | null;
}

class Delivery extends React.Component<Props, State> {
  static contextType = UserContext;

  constructor(props: Props) {
    super(props);

    this.state = {
      loading: true,
      delivery: null,
    }
  }

  async componentDidMount() {
    const delivery = await DeliveryModel.getActive();
    this.setState({ loading: false, delivery });
  }

  render() {
    const { role } = this.context;
    if (role !== 'driver') {
      return <Redirect to="/order" />
    }

    if (this.state.loading) {
      return <Typography>Fetching data...</Typography>
    }

    const { delivery } = this.state;

    if (!delivery) {
      return <DeliveryForm />
    }

    return <div>Delivery</div>
  }
}

export default Delivery;