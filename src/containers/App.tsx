import Navigation from 'components/Navigation';
import Topbar from 'components/Topbar';
import { UserProvider } from 'context/user';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';
import Routes from 'routes';
import PerfectScrollbar from 'react-perfect-scrollbar';
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
          <Topbar />
          <PerfectScrollbar className="content-container">
            <Routes />
          </PerfectScrollbar>
          <Navigation redirectTo={this.redirectTo.bind(this)} />
        </UserProvider>
      </div>
    );
  }
}

export default withRouter(App);
