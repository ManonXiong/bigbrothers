import React from "react";
import { SearchDropDownBox } from "../../lib/SearchDropDownBox";

const TicketSearchBox = props => {
  return (
    <SearchDropDownBox placeholderContent="Select Ticket" options={props.options} />
  );
};

export { TicketSearchBox };
