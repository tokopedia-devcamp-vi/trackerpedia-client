import { createStyles, Theme } from "@material-ui/core";

export const styles = (theme: Theme) => createStyles({
  root: {
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  button: {
    marginTop: theme.spacing(1.5),
  },
})