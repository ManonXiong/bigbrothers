import React from "react";
// import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import MenuSidebar from "../components/MenuSideBar";
import { DataTable } from "../../lib/DataTable";
import { TICKET_LIST_COLUMNS } from "../constants/global";
import { TICKETS_LIST_DATA } from "../constants/fakeData";
import { LogoHeader } from "./LogoHeader";
import ProjectDetail from "./ProjectDetail";
import TicketDetail from "./TicketDetail";
import ProjectsList from "./ProjectsList";
import TicketsList from "./TicketsList";

const App = () => {
  const ticketListCols = TICKET_LIST_COLUMNS;
  // const { project, ticket } = props;
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <LogoHeader />
          <Route path="/" exact component={ProjectsList} />
          <Route path="/tickets" exact component={TicketsList} />
          <Route path="/ticket/detail" exact component={TicketDetail} />
          <Route path="/project/detail" exact component = {ProjectDetail} />
        </div>
      </BrowserRouter>
      {/* <LogoHeader />
      {/* <MenuSidebar /> */}
      <div>
        <DataTable columns={ticketListCols} data={TICKETS_LIST_DATA} setSorted={() => {}} />
      </div> */}
    </div>
  );
};

// const mapStateToProps = state => {
//   return { project: state.project, ticket: state.ticket };
// }

// export default connect(mapStateToProps, null)(App);
export default App;
