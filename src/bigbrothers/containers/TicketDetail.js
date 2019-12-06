import React from "react";
import { Container, Divider, Segment, Header, Icon } from "semantic-ui-react";
import { TicketSearchBox } from "../components/TicketSearchBox";
import { TicketInfoCard } from "../components/TicketInfoCard";
import { TicketInfoHeader } from "../components/TicketInfoHeader";

const TICKET_ID_OPTIONS = [
  {value: "401k", key: "401k", text: "401k"},
  {value: "402k", key: "402k", text: "402k"},
  {value: "403k", key: "403k", text: "403k"},
  {value: "404k", key: "404k", text: "404k"},
  {value: "405k", key: "405k", text: "405k"},
  {value: "406k", key: "406k", text: "406k"},
  {value: "407k", key: "407k", text: "407k"},
  {value: "408k", key: "408k", text: "408k"},
  {value: "409k", key: "409k", text: "409k"},
  {value: "410k", key: "410k", text: "410k"}
]

const TicketDetail = () => {
  return (
    <div>
      <Container>
        <TicketSearchBox options={TICKET_ID_OPTIONS} />
        <Divider />
        <Segment
          style={{
            border: "none",
            boxShadow: "none",
            paddingBottom: "0px",
            marginBottom: "0px"
          }}>
          <TicketInfoHeader />
        </Segment>
        <Segment.Group
          style={{
            border: "none",
            boxShadow: "none",
            marginTop: "0px"
          }}>
          <Segment
            attached="top"
            style={{
              display: "flex",
              border: "none",
              paddingBottom: "0px",
              marginBottom: "0px"
            }}>
            <Header as="h2" style={{ marginRight: "10px"}}>
              Ticket Title
            </Header>
            <Icon name="edit" />
          </Segment>
          <Segment style={{ border: "none", boxShadow: "none" }}>
            <div style={{margineBottom: "20px"}}>
              Ticket description Ticket description Ticket description Ticket description Ticket description Ticket description Ticket description Ticket description Ticket description Ticket description Ticket description Ticket description Ticket description Ticket description Ticket descriptionTicket description Ticket descriptionTicket description 
            </div>
            <TicketInfoCard />
          </Segment>
        </Segment.Group>
      </Container>
      {/* <Container>Ticket Info</Container>
      <Container>Ticket Detail</Container> */}
    </div>
  );
};

export default TicketDetail;
