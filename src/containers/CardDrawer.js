/* --- IMPORT: React --- */
import React from "react";
/* --- IMPORT: Material UI --- */
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

const CardDrawer = props => {
  /* --- FORMATTING: Destructuring statements --- */
  const { inspectCard, inspecting, onDismountCard } = props;
  const {
    number,
    assignee,
    shortDescription,
    application,
    made_sla,
    upon_reject,
    opened_by,
    priority,
    activity_due,
    approval
  } = inspectCard;

  /* --- FORMATTING: Props --- */
  const flexRow = { display: "flex", flexFlow: "row nowrap" };
  const buttonStyle = { position: "fixed", top: "16px", right: "16px" };
  const iconStyle = { transform: "rotate(45deg)", color: "grey" };

  return (
    <Drawer className="CardDrawer" anchor="right" open={inspecting}>
      <div className="listTitle" style={flexRow}>
        <span className="test">test</span>
        <Typography variant="h3" style={{ padding: "16px" }}>
          {number}
        </Typography>
        <Button
          className="closeDrawer"
          style={buttonStyle}
          onClick={onDismountCard}
        >
          <Icon style={iconStyle} fontSize="large">
            add_circle
          </Icon>
        </Button>
      </div>
      <List>
        <ListItem>
          <InputLabel>Assigned to:</InputLabel>
          <TextField value={assignee || "N/A"} fullWidth />
        </ListItem>
        <ListItem>
          <InputLabel>Short description:</InputLabel>
          <TextField value={shortDescription} fullWidth />
        </ListItem>
        <ListItem>
          <InputLabel>Application:</InputLabel>
          <TextField value={application || "SYSTEM"} fullWidth />
        </ListItem>
        <ListItem>
          <InputLabel>Made SLA:</InputLabel>
          <TextField value={made_sla} fullWidth />
        </ListItem>
        <ListItem>
          <InputLabel>Upon reject:</InputLabel>
          <TextField value={upon_reject} fullWidth />
        </ListItem>
        <ListItem>
          <InputLabel>Opened by:</InputLabel>
          <TextField value={opened_by} fullWidth />
        </ListItem>
        <ListItem>
          <InputLabel>Priority:</InputLabel>
          <TextField value={priority} fullWidth />
        </ListItem>
        <ListItem>
          <InputLabel>Activity Due:</InputLabel>
          <TextField value={activity_due} fullWidth />
        </ListItem>
        <ListItem>
          <InputLabel>Approval:</InputLabel>
          <TextField value={approval} fullWidth />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default CardDrawer;
