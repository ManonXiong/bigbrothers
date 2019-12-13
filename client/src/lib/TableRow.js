import React from "react";
import { Table } from "semantic-ui-react";

function TableRow({ rowData, columns }) {
  return (
    <Table.Row>
      {Object.keys(columns).map((col, index) => {
        return (
          <Table.Cell
            key={index}
            style={{ textAlign: "center" }}
          >
            {rowData[col]}
          </Table.Cell>
        );
      })}
    </Table.Row>
  );
};

export { TableRow };
