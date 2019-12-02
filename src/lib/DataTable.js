import React from "react";
import { Table } from "semantic-ui-react";
import { TableRow } from "./TableRow";
import { TableHeader } from "./TableHeader";

function DataTable ({
  columns,
  data,
  setSorted
}) {
  return (
    <Table>
      <TableHeader columns={columns} setSorted={setSorted} />
      <Table.Body>
        {data.map((row, index) => {
          return (
            <TableRow key={index} rowData={row} columns={columns} />
          );
        })}
      </Table.Body>
    </Table>
  );
};

export { DataTable };