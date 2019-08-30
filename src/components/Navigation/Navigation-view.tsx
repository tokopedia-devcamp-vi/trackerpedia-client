import { BottomNavigation, BottomNavigationAction, withStyles, WithStyles } from '@material-ui/core';
import Deliver from '@material-ui/icons/LocalShippingOutlined';
import Settings from '@material-ui/icons/Settings';
import Items from '@material-ui/icons/ShoppingBasketOutlined';
import { UserContext } from 'context/user';
import React from 'react';
import RoutePaths from 'routes/routes';
import { styles } from './Navigation-styles';
import { RouteComponentProps, withRouter } from 'react-router';

type Props = WithStyles<typeof styles> & RouteComponentProps<{}> & {
  redirectTo: (path: string) => void;
}

interface State {
  active: string,
}

class Navigation extends React.Component<Props, State> {
  static contextType = UserContext;

  constructor(props: Props) {
    super(props);

    const path = this.props.location.pathname.slice(1);
    this.state = {
      active: path,
    }
  }

  onNavigate(_: any, newValue: string) {
    this.setState({ active: newValue });
    const { role } = this.context;
    console.log(role);
    switch (newValue) {
      case "items":
        this.props.redirectTo(RoutePaths.ITEMS);
        break;
      case "order":
        this.props.redirectTo(RoutePaths.ORDER);
        break;
      case "delivery":
        this.props.redirectTo(RoutePaths.DELIVERY);
        break;
      case "profile":
        this.props.redirectTo(RoutePaths.PROFILE);
        break;
    }
  }

  render() {
    const { role } = this.context;
    const { classes } = this.props;
    return (
      <BottomNavigation
        showLabels
        onChange={this.onNavigate.bind(this)}
        // className={classes.root}
        value={this.state.active}
      >
        <BottomNavigationAction value={"items"} label={"Items"} icon={<Items />} />
        {role === 'driver' ?
          <BottomNavigationAction value={"delivery"} label={"Delivery"} icon={<Deliver />} /> :
          <BottomNavigationAction value={"order"} label={"Order"} icon={<Deliver />} />
        }
        <BottomNavigationAction value={"profile"} label={"Profile"} icon={<Settings />} />
      </BottomNavigation>
    )
  }
}

export default withStyles(styles)(withRouter(Navigation));