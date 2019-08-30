import { Theme, createStyles } from "@material-ui/core";

export const styles = (theme: Theme) => createStyles({
  root: {
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    padding: theme.spacing(2) + 'px !important',
  },
  findButton: {
    marginTop: theme.spacing(1.5),
  }
});