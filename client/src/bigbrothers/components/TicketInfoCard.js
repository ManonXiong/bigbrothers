import React from "react";
import { Table } from "semantic-ui-react";
import { InfoCell } from "../../lib/InfoCell";

const TicketInfoCard = props => {
  return (
    <Table collapsing style={{ border: "none" }}>
      <Table.Body>
        <Table.Row>
          <InfoCell labelTitle="Urgent Level | " value="High" />
          <InfoCell labelTitle="Date Created | " value="2019/01/01" />
        </Table.Row>
        <Table.Row>
          <InfoCell labelTitle="Hours(used/budgeted) | " value="3/10" />
          <InfoCell labelTitle="Due Date | " value="2019/10/30" />
        </Table.Row>
        <Table.Row>
          <InfoCell labelTitle="Project | " value="taxation" />
          <InfoCell labelTitle="Project Manager | " value="Tom Jerry" />
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export { TicketInfoCard };
