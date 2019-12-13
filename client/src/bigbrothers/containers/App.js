import React from "react";
import { Router, Route } from "react-router-dom";
import { LogoHeader } from "./LogoHeader";
import ProjectDetail from "./ProjectDetail";
import TicketEdit from "./TicketEdit";
import ProjectsList from "./ProjectsList";
import TicketsList from "./TicketsList";
import ProjectCreate from "./ProjectCreate";
import ProjectEdit from "./ProjectEdit";
import TicketCreate from "./TicketCreate";
import LogIn from "./LogIn";
import history from "../history";


class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <LogoHeader />
            <Route path="/" exact component={LogIn} />
            <Route path="/projects" exact component={ProjectsList} />
            <Route path="/projects/new" exact component={ProjectCreate} />
            <Route path="/projects/edit/:id" exact component={ProjectEdit} />
            <Route path="/projects/detail/:id" exact component={ProjectDetail} />
            <Route path="/tickets" exact component={TicketsList} />
            <Route path="/tickets/detail/:id" exact component={TicketEdit} />
            <Route path="/tickets/new" exact component={TicketCreate} />
          </div>
        </Router>
      </div>
    );
  }
};

export default App;
