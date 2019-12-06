import React from "react";
// import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
// import MenuSidebar from "../components/MenuSideBar";
import { LogoHeader } from "./LogoHeader";
import ProjectDetail from "./ProjectDetail";
import TicketDetail from "./TicketDetail";
import ProjectsList from "./ProjectsList";
import TicketsList from "./TicketsList";

const App = () => {
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
      {/* <div>
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
