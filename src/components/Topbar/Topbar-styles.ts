import { Theme, createStyles } from "@material-ui/core";

export const styles = (theme: Theme) => createStyles({
  heading: {
    color: theme.palette.common.white,
    fontWeight: 'bolder'
  }
});