import React from "react";
import { Container, Divider, Segment, Header, Icon } from "semantic-ui-react";
import { ProjectInfoHeader } from "../components/ProjectInfoHeader";
import { ProjectInfoCard } from "../components/ProjectInfoCard";
import { ProjectSearchBox } from "../components/ProjectSearchBox";
import { DataTable } from "../../lib/DataTable";
import { TICKET_LIST_COLUMNS } from "../constants/global";
import { TICKETS_LIST_DATA } from "../constants/fakeData";

const PROJECT_ID_OPTIONS = [
  {value: "P001", key: "P001", text: "P001"},
  {value: "P002", key: "P002", text: "P002"},
  {value: "P003", key: "P003", text: "P003"},
  {value: "P004", key: "P004", text: "P004"},
  {value: "P005", key: "P005", text: "P005"},
  {value: "P006", key: "P006", text: "P006"},
  {value: "P007", key: "P007", text: "P007"},
  {value: "P008", key: "P008", text: "P008"}
];

const ProjectDetail = () => {
  const ticketListCols = TICKET_LIST_COLUMNS;
  return (
    <div>
      <Container>
        <ProjectSearchBox options={PROJECT_ID_OPTIONS} />
        <Divider />
        <Segment
          style={{
            border: "none",
            boxShadow: "none",
            paddingBottom: "0px",
            marginBottom: "0px"
          }}>
          <ProjectInfoHeader />
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
              Project Title
            </Header>
            <Icon name="edit" />
          </Segment>
          <Segment style={{ border: "none", boxShadow: "none" }}>
            <div style={{margineBottom: "20px"}}>
              Ticket description Ticket description Ticket description Ticket description Ticket description Ticket description Ticket description Ticket description Ticket description Ticket description Ticket description Ticket description Ticket description Ticket description Ticket descriptionTicket description Ticket descriptionTicket description 
            </div>
            <ProjectInfoCard />
          </Segment>
        </Segment.Group>
        <Divider />
        <DataTable columns={ticketListCols} data={TICKETS_LIST_DATA} setSorted={() => {}} />
      </Container>
    </div>
  );
};

export default ProjectDetail;
