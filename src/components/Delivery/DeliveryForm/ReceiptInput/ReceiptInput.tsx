import React from 'react';
import { WithStyles, withStyles } from '@material-ui/styles';
import { styles } from './ReceiptInput-styles';
import { Card, CardContent, TextField, Typography, Button } from '@material-ui/core';

type Props = WithStyles<typeof styles> & {
  onSubmit?: (id: string) => void;
  loading: boolean;
}

interface State {
  value: string;
}

class ReceiptInput extends React.Component<Props, State> {
  state = {
    value: '',
  }

  onInputChange(e: any) {
    this.setState({ value: e.target.value });
  }

  onClick() {
    const { onSubmit } = this.props;
    if (!onSubmit) return;
    onSubmit(this.state.value);
  }

  render() {
    const { classes, loading } = this.props;
    return (
      <Card className={classes.root}>
        <CardContent className={classes.formContainer}>
          <Typography variant="caption">Input order number</Typography>
          <TextField
            id="time" type="number" disabled={loading}
            placeholder="XXXXXX..." onChange={this.onInputChange.bind(this)}
            value={this.state.value} color={"secondary"} />
          <Button
            variant="outlined" color="primary" className={classes.findButton}
            disabled={!this.state.value || this.state.value.length === 0 || loading}
            onClick={this.onClick.bind(this)}>
            {loading ? 'Loading' : 'Find'}
          </Button>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(ReceiptInput);