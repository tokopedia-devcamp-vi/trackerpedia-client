import React from 'react';
import { node } from 'prop-types';

const UserContext = React.createContext({});

class UserProvider extends React.Component {
  static propTypes = {
    children: node.isRequired,
  }

  constructor(props: {}) {
    super(props);

    this.state = {
      role: 'driver',
      switchToBuyer: this.switchToBuyer.bind(this),
      switchToDriver: this.switchToDriver.bind(this),
    }
  }

  switchToBuyer() {
    this.setState({
      role: 'buyer',
    })
  }

  switchToDriver() {
    this.setState({
      role: 'driver',
    })
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

export { UserConsumer, UserContext, UserProvider };