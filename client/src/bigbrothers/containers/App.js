import React from "react";
import { Router, Route } from "react-router-dom";
import { LogoHeader } from "./LogoHeader";
import ProjectDetail from "./ProjectDetail";
import TicketDetail from "./TicketDetail";
import ProjectsList from "./ProjectsList";
import ListProjects from "./ListProjects";
import TicketsList from "./TicketsList";
import ProjectCreate from "./ProjectCreate";
import history from "../history";


class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <LogoHeader />
            <Route path="/" exact component={ListProjects} />
            <Route path="/tickets" exact component={TicketsList} />
            <Route path="/ticket/detail" exact component={TicketDetail} />
            <Route path="/project/detail" exact component={ProjectDetail} />
            <Route path="/project/new" exact component={ProjectCreate} />
            <Route path="/ticket/new" exact component={ProjectCreate} />
          </div>
        </Router>
      </div>
    );
  }
};

export default App;
