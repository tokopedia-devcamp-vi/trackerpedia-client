import React from 'react';
import TopbarView from './Topbar-view';
import { RouteComponentProps, withRouter } from 'react-router';
import { capitalize } from "underscore.string";

type Props = RouteComponentProps<{}> & {}

class Topbar extends React.Component<Props> {
  render() {
    const { location }  = this.props;
    return <TopbarView title={capitalize(location.pathname.slice(1))}/>;
  }
}

export default withRouter(Topbar);