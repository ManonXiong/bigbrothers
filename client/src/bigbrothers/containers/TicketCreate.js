import React from "react";
import { connect } from 'react-redux';
import { createTicket } from "../actions";
import TicketCreateForm from "../components/TicketCreateForm";

class TicketCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createTicket(formValues);
  };

  todayDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear().toString().substr(-2);
    
    today = mm + '/' + dd + '/' + yyyy;
    return today;
  }

  render() {
    return (
      <div>
        <h3>Create a Ticket</h3>
        <TicketCreateForm
          initialValues={{
            create_date: this.todayDate(),
            status: "created",
            hours_spent: 0
          }}
          onSubmit={this.onSubmit} />
      </div>
    );
  }
};

export default connect(
  null,
  { createTicket }
)(TicketCreate);
