import { createStyles, Theme } from "@material-ui/core";

export const styles = (theme: Theme) => createStyles({
  root: {
    marginBottom: theme.spacing(1),
    display: 'flex',
    alignItems: 'stretch',
  },
  content: {
    padding: theme.spacing(2) + 'px !important',
    '&:first-child': {
      flex: 1,
    }
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  itemName: {
    fontWeight: 'bolder',
  }
})