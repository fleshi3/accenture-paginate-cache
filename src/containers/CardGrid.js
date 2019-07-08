import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const CardGrid = props => {
  const { cardData, onInspectCard } = props;
  const {
    id,
    number,
    application,
    assignee,
    shortDescription
  } = cardData.coreData;
  return (
    <Card className="ticketCard" key={id}>
      <CardContent>
        <Typography className="ticketStatus" color="textSecondary" gutterBottom>
          NEW
        </Typography>
        <Typography className="ticketNumber" variant="h5" component="h2">
          {number}
        </Typography>
        <Typography className="ticketApplication" color="textSecondary">
          Application: {application}
        </Typography>
        <Typography className="ticketAssignee" color="textSecondary">
          Assignee: {assignee}
        </Typography>
        <Typography className="ticketDescription" variant="body2" component="p">
          {shortDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            return onInspectCard(cardData);
          }}
        >
          LEARN MORE
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardGrid;
