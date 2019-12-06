import React from "react";
import { Table } from "semantic-ui-react";
import { InfoCell } from "../../lib/InfoCell";

const ProjectInfoCard = props => {
  return (
    <Table collapsing style={{ border: "none" }}>
      <Table.Body>
        <Table.Row>
          <InfoCell labelTitle="Hours(used/Budgeted) | " value="26/300" />
          <InfoCell labelTitle="Ticket(Opend/Closed) | " value="12/50" />
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export { ProjectInfoCard };
