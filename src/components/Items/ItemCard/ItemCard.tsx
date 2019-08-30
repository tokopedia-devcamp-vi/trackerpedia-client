import React from 'react';
import { WithStyles, withStyles} from '@material-ui/styles';
import { styles } from './ItemCard-styles';
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import OrderIcon from '@material-ui/icons/AddShoppingCartOutlined';
import clsx from 'clsx';

type Props = WithStyles<typeof styles> & {
  id: number,
  name: string,
  price: string,
  imageUrl?: string,
  onClick?: (id: number) => void;
}

class ItemCard extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    const { name, price, imageUrl, onClick } = this.props;
    return (
      <Card className={classes.root}>
        <CardContent className={classes.content}>
          <Typography variant="body2" className={classes.itemName} gutterBottom>{name}</Typography>
          <Typography>{price}</Typography>
        </CardContent>
        <CardContent className={clsx(classes.content, classes.buttonContainer)}>
          <Button variant={"contained"} color={"secondary"}>
            <OrderIcon fontSize={"small"} style={{ marginRight: 8 }}/> Order
          </Button>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(ItemCard);