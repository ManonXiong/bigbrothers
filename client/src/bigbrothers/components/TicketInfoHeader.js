import React from "react";
import { Segment } from "semantic-ui-react";
import { InfoCell } from "../../lib/InfoCell";

const segmentStyle = {
  border: "none",
  padding: "0px",
  boxShadow: "none",
  marginTop: "0px"
};

const TicketInfoHeader = props => {
  return (
    <Segment.Group horizontal style={segmentStyle}>
      <Segment style={segmentStyle}>
        <InfoCell labelTitle="Ticket ID | " value="t001" />
      </Segment>
      <Segment style={segmentStyle}>
        <InfoCell labelTitle="Assigned To | " value="John Thompson" />
      </Segment>
      <Segment style={segmentStyle}>
        <InfoCell labelTitle="Status | " value="In Progress" />
      </Segment>
    </Segment.Group>
  );
};

export { TicketInfoHeader };
