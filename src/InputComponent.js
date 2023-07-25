import { TextField, InputAdornment } from "@material-ui/core";
import { useStyles } from "./useStyles";

export const InputComponent = ({
  label,
  value,
  setter,
  type = "number",
  Icon,
  endAdornment
}) => {
  const classes = useStyles();
  return (
    <TextField
      className={classes.textField}
      variant="outlined"
      label={label}
      value={value}
      type={type}
      onChange={(e) => setter(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Icon className={classes.adornment} />
          </InputAdornment>
        ),
        endAdornment: endAdornment,
        classes: {
          input: endAdornment ? classes.percentageInput : null
        }
      }}
    />
  );
};
