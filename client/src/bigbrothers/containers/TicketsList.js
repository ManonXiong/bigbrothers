import React from "react";
import { connect } from "react-redux";
import { DataTable } from "../../lib/DataTable";
import { TICKET_LIST_COLUMNS } from "../constants/global";
import { TICKETS_LIST_DATA } from "../constants/fakeData";
import { getTickets } from "../actions";

const ticketListCols = TICKET_LIST_COLUMNS;

class TicketsList extends React.Component {
  componentDidMount() {
    this.props.getTickets();
    console.log(this.props.tickets);
  };

  render() {
    return (
      <div>
        <button onClick={() => {}}>Click</button>
        <DataTable columns={ticketListCols} data={TICKETS_LIST_DATA} setSorted={() => {}} />
      </div>
    );
  }
};

const mapStateToProps = ({ tickets }) => ({ tickets: tickets.data });

const actions = {
  getTickets
}

export default connect(mapStateToProps, actions)(TicketsList);

// PK_ID: 1
// assigned_employee_id: "E0201"
// budgeted_hours: 40
// create_date: "2019-10-01T00:00:00"
// due_date: "2019-11-01T00:00:00"
// hours_spent: 40
// project: "p01"
// status: "closed"
// ticket_description: "Build the wireframe of the dashboard and review with the stakeholders"
// ticket_id: "t001"
// ticket_title: "wireframe"
// urgent_level: "medium"
