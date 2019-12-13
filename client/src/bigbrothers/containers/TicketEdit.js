import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { getTicket, editTicket } from "../actions";
import TicketCreateForm from "../components/TicketCreateForm";

class ProjectEdit extends React.Component {
  componentDidMount() {
    this.props.getTicket(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editTicket(this.props.match.params.id, formValues);
  }

  render() {
    if (!this.props.ticket) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <h3>{this.props.ticket.tickt_title}</h3>
        <TicketCreateForm
          initialValues={_.pick(this.props.ticket,
            "ticket_title", "ticket_description", "project_name", "assigned_employee_name", "budgeted_hours", "hours_spent", "urgent_level", "status", "create_date", "due_date")}
          onSubmit={this.onSubmit} />
      </div>
    ); 
  }
}

const mapStateToProps = (state, ownProps) => {
  return { ticket: state.tickets[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { getTicket, editTicket })(ProjectEdit);
