import React from "react";
import { Table, Input, Label } from "semantic-ui-react";

const InfoCell = props => {
  return (
    <Table.Cell
      collapsing
      style={{
        border: "none",
        paddingLeft: "0px",
        paddingTop: "0px",
        paddingBottom: "0px"
      }}>
      <Input style={{ display: "flex", alignItems: "center" }}>
        <Label style={{ backgroundColor: "transparent", paddingLeft: "0px" }}>
          <b>{props.labelTitle}</b>
        </Label>
        {props.value}
      </Input>
    </Table.Cell>
  );
};

export { InfoCell };
