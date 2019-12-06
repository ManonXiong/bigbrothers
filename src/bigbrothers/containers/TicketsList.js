import React from "react";
import { DataTable } from "../../lib/DataTable";
import { TICKET_LIST_COLUMNS } from "../constants/global";
import { TICKETS_LIST_DATA } from "../constants/fakeData";

const TicketsList = () => {
  const ticketListCols = TICKET_LIST_COLUMNS;
  return (
    <div>
      <DataTable columns={ticketListCols} data={TICKETS_LIST_DATA} setSorted={() => {}} />
    </div>);
};

export default TicketsList;
