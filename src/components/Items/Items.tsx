import { Typography } from '@material-ui/core';
import { Item, Order } from 'models';
import { withSnackbar, WithSnackbarProps } from 'notistack';
import numeral from 'numeral';
import React from 'react';
import ItemCard from './ItemCard';

type Props = WithSnackbarProps & {}

interface State {
  loading: boolean;
  items?: Item[] | null;
}

class Items extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      loading: true,
      items: null,
    };
  }

  async componentDidMount() {
    const items = await Item.getAll();
    this.setState({ loading: false, items });
  }

  async orderItem(id: number) {
    try {
      const result = await Order.placeNew(id);
      if(result) {
        this.props.enqueueSnackbar('Order successfully placed', {
          variant: 'success',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'center',
          }
        });
      }
    } catch (e) {
      this.props.enqueueSnackbar(e.message, {
        variant: 'error',
      });
    }
  }

  render() {
    if(this.state.loading) {
      return <Typography>Loading items...</Typography>
    }

    const { items } = this.state;
    if(!items) {
      return <Typography>Cannot load items</Typography>
    }
    return items.map((item, idx) => (
      <ItemCard
        key={idx}
        id={item.id}
        name={item.name}
        price={'Rp ' + numeral(item.price).format('0,0')}
        onClick={this.orderItem.bind(this)}
      />
    ));
  }
}

export default withSnackbar(Items);