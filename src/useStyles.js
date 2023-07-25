import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  textField: {
    margin: theme.spacing(2, 0),
    width: "70%",
    marginLeft: "auto",
    marginRight: "auto"
  },
  box: {
    padding: theme.spacing(2),
    backgroundColor: "#fafafa",
    borderRadius: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      width: "70%",
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  typography: {
    marginBottom: theme.spacing(2)
  },
  adornment: {
    marginRight: theme.spacing(1)
  },
  percentageInput: {
    "& input": {
      textAlign: "right"
    }
  }
}));
