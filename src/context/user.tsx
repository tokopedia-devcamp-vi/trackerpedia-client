import React from 'react';
import { node, instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

const UserContext = React.createContext({});

type Props = {
  cookies: Cookies
}

interface State {
  role: string;
  switchToBuyer: () => void;
  switchToDriver: () => void;
}

class UserProviderCookie extends React.Component<Props, State> {
  static propTypes = {
    children: node.isRequired,
    cookies: instanceOf(Cookies).isRequired
  }

  constructor(props: Props) {
    super(props);

    const { cookies } = this.props;
    this.state = {
      role: cookies.get('role') || 'driver',
      switchToBuyer: this.switchToBuyer.bind(this),
      switchToDriver: this.switchToDriver.bind(this),
    }
    cookies.set('role', this.state.role);
  }

  switchToBuyer() {
    this.setState({
      role: 'buyer',
    })
    this.props.cookies.set('role', 'buyer');
  }

  switchToDriver() {
    this.setState({
      role: 'driver',
    });
    this.props.cookies.set('role', 'driver');
  }

  render() {
    const { children } = this.props;
    return (
      <UserContext.Provider value={this.state}>
        {children}
      </UserContext.Provider>
    );
  }

}

const UserConsumer = UserContext.Consumer;

const UserProvider = withCookies(UserProviderCookie);

export { UserConsumer, UserContext, UserProvider };