import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Icon, Label } from "semantic-ui-react";
import { getTickets } from "../actions";

class TicketsList extends React.Component {
  componentDidMount() {
    this.props.getTickets();
  };

  labelColor = level => {
    if (level === "high") {
      return (
        <Label attached="bottom right" color="red">
          <div>{`${level}`}</div>
        </Label>
      );
    }

    if (level === "medium") {
      return (
        <Label attached="bottom right" color="olive">
          <div>{`${level}`}</div>
        </Label>
      );
    }

    if (level === "low") {
      return (
        <Label attached="bottom right" color="blue">
          <div>{`${level}`}</div>
        </Label>
      );
    }
  }

  // renderStatus = value => {
  //   if (value === "open") {
  //     return (
  //       <Label attached="bottom right" color="red">
  //         <div>{`${value}`}</div>
  //       </Label>
  //     );
  //   }

  //   if (value === "medium") {
  //     return (
  //       <Label attached="bottom right" color="violet">
  //         <div>{`${value}`}</div>
  //       </Label>
  //     );
  //   }

  //   if (value === "low") {
  //     return (
  //       <Label attached="bottom right" color="blue">
  //         <div>{`${value}`}</div>
  //       </Label>
  //     );
  //   }
  // }

  renderList = () => {
    return this.props.tickets.map(ticket => {
      return (
        <Card color="olive" key={ticket.id}>
          <Card.Content style={{ backgroundColor: "black"}}>
            <Card.Header>
              <Link to={`/tickets/detail/${ticket.id}`}>
                <div style={{ fontSize: "22px", color: "orange"}}>
                {ticket.ticket_title}
                </div>
              </Link>
            </Card.Header>
            <Card.Meta style={{ marginTop: "10px"}}>
              <div style={{ color: "white", fontSize: "13px" }}>
                Description: <br /><b>{ticket.ticket_description === "" ? "No Description" : ticket.ticket_description}</b>
              </div>
            </Card.Meta>
          </Card.Content>
          <Card.Content> 
            <Card.Description>
              <div>Created Date: {ticket.create_date}</div>
              <div>Due Date: {ticket.due_date}</div>
              <Link to={`/projects/detail/${ticket.project}`}>
                <div>Project: {ticket.project_name}</div>
              </Link>
              <div>{`Spent / Finished: ${ticket.hours_spent} / ${ticket.budgeted_hours}`}</div>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
              <div><Icon name='user' />
              <b>{ticket.assigned_employee_name}</b>
              </div>
              <div>
              <b>Status: </b>{ticket.status}
              {this.labelColor(ticket.urgent_level)}
              </div>
          </Card.Content>
        </Card>)
    })
  }

  render() {
    return (
      <div>
        <h2>Tickets</h2>
        <Card.Group itemsPerRow={4}>
          {this.renderList()}
        </Card.Group>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { tickets: Object.values(state.tickets) };
};

const actions = {
  getTickets
}

export default connect(mapStateToProps, actions)(TicketsList);
