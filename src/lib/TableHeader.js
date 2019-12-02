import React from "react";
import { Table } from "semantic-ui-react";

const TableHeader = ({ columns, setSorted}) => (
  <Table.Header>
    <Table.Row>
      {Object.values(columns).map((col, index) => {
        return (
        <Table.HeaderCell
          key={index}
          onClick={setSorted}
          style={{ textAlign: "center" }}
        >
          {col}
        </Table.HeaderCell>);
      })}
    </Table.Row>
  </Table.Header>
)

export { TableHeader }; 