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
  render() {
    const { classes, onClick, ...item } = this.props;
    return (
      <Card className={classes.root}>
        <CardContent className={classes.content}>
          <Typography variant="body2" className={classes.itemName} gutterBottom>{item.name}</Typography>
          <Typography>{item.price}</Typography>
        </CardContent>
        <CardContent className={clsx(classes.content, classes.buttonContainer)}>
          <Button variant={"contained"} color={"secondary"} onClick={onClick && (() => onClick(item.id))}>
            <OrderIcon fontSize={"small"} style={{ marginRight: 8 }}/> Order
          </Button>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(ItemCard);