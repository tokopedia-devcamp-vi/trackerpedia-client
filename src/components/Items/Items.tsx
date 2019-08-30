import { Typography } from '@material-ui/core';
import { Item } from 'models';
import numeral from 'numeral';
import React from 'react';
import ItemCard from './ItemCard';

interface Props { }

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

  render() {
    if(this.state.loading) {
      return <Typography>Loading items...</Typography>
    }

    const { items } = this.state;
    if(!items) {
      return <Typography>Cannot load items</Typography>
    }
    return items.map((item, idx) => {
      return <ItemCard
        key={idx}
        id={item.id}
        name={item.name}
        price={numeral(item.price).format('$ 0,0')}
      />
    });
  }
}

export default Items;