import { Typography } from "@material-ui/core";

export const LabelComponent = ({ label, value }) => (
  <Typography variant="body1" style={{ margin: "10px 0" }}>
    <strong>{label}</strong> {value}
  </Typography>
);
