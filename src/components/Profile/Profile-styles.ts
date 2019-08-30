import { createStyles, Theme } from "@material-ui/core";

export const styles = (theme: Theme) => createStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
  },
  content: {
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  button: {
    marginTop: theme.spacing(2),
  }
});