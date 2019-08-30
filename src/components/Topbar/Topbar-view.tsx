import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { styles } from './Topbar-styles';
import { withStyles, WithStyles } from '@material-ui/styles';

type Props = WithStyles<typeof styles> & {
  title: string;
}

class Topbar extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant={"h6"} className={classes.heading}>
            <span style={{ fontWeight: 'normal' }}>Trackerpedia > </span>{this.props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Topbar);