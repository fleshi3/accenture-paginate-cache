/* --- IMPORT: React --- */
import React from "react";
/* --- IMPORT: Material UI --- */
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const CardGrid = props => {
  /* --- FORMATTING: Destructuring Statements --- */
  const { cardData, onInspectCard } = props;
  const {
    id,
    number,
    application,
    assignee,
    shortDescription
  } = cardData.coreData;

  /* --- FORMATTING: Props --- */
  const ticketNumber = { variant: "h5", component: "h2" };
  const ticketDescription = { variant: "body2", component: "p" };
  const ticketButton = {
    size: "small",
    onClick: () => onInspectCard(cardData)
  };

  return (
    <Card className="ticketCard" key={id}>
      <CardContent>
        <Typography className="ticketStatus" color="textSecondary" gutterBottom>
          NEW
        </Typography>
        <Typography className="ticketNumber" {...ticketNumber}>
          {number}
        </Typography>
        <Typography className="ticketApplication" color="textSecondary">
          Application: {application || "SYSTEM"}
        </Typography>
        <Typography className="ticketAssignee" color="textSecondary">
          Assignee: {assignee || "N/A"}
        </Typography>
        <Typography className="ticketDescription" {...ticketDescription}>
          {shortDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button {...ticketButton}>LEARN MORE</Button>
      </CardActions>
    </Card>
  );
};

export default CardGrid;
