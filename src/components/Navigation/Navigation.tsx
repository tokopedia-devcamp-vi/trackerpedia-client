import { BottomNavigation, BottomNavigationAction, withStyles, WithStyles } from '@material-ui/core';
import Deliver from '@material-ui/icons/LocalShippingOutlined';
import Settings from '@material-ui/icons/Settings';
import Items from '@material-ui/icons/ShoppingBasketOutlined';
import OrdersIcon from '@material-ui/icons/ShoppingCartOutlined';
import { UserContext } from 'context/user';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import RoutePaths from 'routes/routes';
import { styles } from './Navigation-styles';

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

  static getDerivedStateFromProps(props: Props, state: State) {
    if (!props.location) return state;
    const path = props.location.pathname.slice(1);
    if (state.active === path) return state;
    return { ...state, active: path };
  }

  onNavigate(_: any, newValue: string) {
    this.setState({ active: newValue });
    const { role } = this.context;
    console.log(role);
    switch (newValue) {
      case "items":
        this.props.redirectTo(RoutePaths.ITEMS);
        break;
      case "orders":
        this.props.redirectTo(RoutePaths.ORDERS);
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
    return (
      <BottomNavigation
        showLabels
        onChange={this.onNavigate.bind(this)}
        value={this.state.active}
      >
        {role !== 'driver' && <BottomNavigationAction value={"items"} label={"Items"} icon={<Items />} />}
        {role === 'driver' ?
          <BottomNavigationAction value={"delivery"} label={"Delivery"} icon={<Deliver />} /> :
          <BottomNavigationAction value={"orders"} label={"Orders"} icon={<OrdersIcon />} />
        }
        <BottomNavigationAction value={"profile"} label={"Profile"} icon={<Settings />} />
      </BottomNavigation>
    )
  }
}

export default withStyles(styles)(withRouter(Navigation));