import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { LogoHeader } from "./LogoHeader";
import ProjectDetail from "./ProjectDetail";
import TicketDetail from "./TicketDetail";
import ProjectsList from "./ProjectsList";
import ListProjects from "./ListProjects";
import TicketsList from "./TicketsList";
import ProjectCreate from "./ProjectCreate";


class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <div>
            <LogoHeader />
            <Route path="/" exact component={ListProjects} />
            <Route path="/tickets" exact component={TicketsList} />
            <Route path="/ticket/detail" exact component={TicketDetail} />
            <Route path="/project/detail" exact component={ProjectDetail} />
            <Route path="/project/new" exact component={ProjectCreate} />
            <Route path="/ticket/new" exact component={ProjectCreate} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default App;
