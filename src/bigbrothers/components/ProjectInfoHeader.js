import React from "react";
import { Segment } from "semantic-ui-react";
import { InfoCell } from "../../lib/InfoCell";

const segmentStyle = {
  border: "none",
  padding: "0px",
  boxShadow: "none",
  marginTop: "0px"
};

const ProjectInfoHeader = props => {
  return (
    <Segment.Group horizontal style={segmentStyle}>
      <Segment style={segmentStyle}>
        <InfoCell labelTitle="Projerct ID | " value="p003" />
      </Segment>
      <Segment style={segmentStyle}>
        <InfoCell labelTitle="Project Manager | " value="John Thompson" />
      </Segment>
    </Segment.Group>
  );
};

export { ProjectInfoHeader };
