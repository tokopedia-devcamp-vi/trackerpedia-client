import Navigation from 'components/Navigation';
import { UserProvider } from 'context/user';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';
import Routes from 'routes';
import './App.scss';

type Props = RouteComponentProps<{}> & {}

class App extends React.Component<Props> {
  redirectTo(route: string) {
    this.props.history.push(route);
  }

  render() {
    return (
      <div id="app-container">
        <UserProvider>
          <Routes />
        </UserProvider>
        <Navigation redirectTo={this.redirectTo.bind(this)} />
      </div>
    );
  }
}

export default withRouter(App);
