import React from 'react';
import { WithStyles, withStyles } from '@material-ui/styles';
import { styles } from './Profile-styles';
import { Typography, Button } from '@material-ui/core';
import { UserContext } from 'context/user';

type Props = WithStyles<typeof styles> & {}

interface State { }

class Profile extends React.Component<Props, State> {
  static contextType = UserContext;
  render() {
    const { classes } = this.props;
    const { role, switchToBuyer, switchToDriver } = this.context;
    return (
      <div className={classes.root}>
        <div className={classes.content}>
          <Typography variant="h6" align="center" gutterBottom>
            I am now a {role}
          </Typography>
          {role === 'driver' ?
            <Button variant="contained" color="primary" className={classes.button} onClick={switchToBuyer}>
              Switch to buyer
            </Button> :
            <Button variant="contained" color="secondary" className={classes.button} onClick={switchToDriver}>
              Switch to driver
            </Button>
          }
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Profile);