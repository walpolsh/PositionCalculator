import { Typography, List, ListItem } from "@material-ui/core";

export const ListComponent = ({ label, values }) => (
  <>
    <Typography variant="body1" style={{ margin: "10px 0" }}>
      <strong>{label}</strong>
    </Typography>
    <List>
      {values.map((value, index) => (
        <ListItem key={index}>{value}</ListItem>
      ))}
    </List>
  </>
);
