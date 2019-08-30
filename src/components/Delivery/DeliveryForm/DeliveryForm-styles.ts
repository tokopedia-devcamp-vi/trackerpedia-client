import { Theme, createStyles } from "@material-ui/core";
import { amber } from "@material-ui/core/colors";

export const styles = (theme: Theme) => createStyles({
  root: {
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  button: {
    marginTop: theme.spacing(1.5),
  },
  notFoundCard: {
    marginTop: theme.spacing(1.5),
    backgroundColor: amber[500],
  }
})