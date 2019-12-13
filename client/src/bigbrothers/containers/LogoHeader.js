import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";

const LogoHeader = () => {
  return(
    <div
      className='ui secondary menu'
      style={{
        backgroundColor: "black",
        display: "flex",
        justifyContent: "flex-start",
        marginBottom: "15px"
      }}>
      <div
        className="item"
        style={{ color: "gold", fontSize: "20px", fontFamily: 'Libre Baskerville' }}
      >
        Big Brothers
      </div>
      <Link to="/projects" className="item">
        <div style={{ fontSize: "13px", color: "white" }}>
          <Icon name="home" color="yellow" size="large" />
          <b>Home</b>
        </div>
      </Link>
      <Link to="/tickets" className="item">
        <div style={{ fontSize: "13px", color: "white" }}>
          <Icon name="tasks" color="yellow" size="large" />
          <b>Tickets</b>
        </div>
      </Link>
      <div className = "right menu">
        <Button className="item">
          <Link to="/projects/new" className="item">
            <div style={{ fontSize: "13px", color: "white" }}>
              <Icon name="plus square" color="blue" size="large" />
              <b>Project</b>
            </div>
          </Link>
        </Button>
        <Button className="item">
          <Link to="/tickets/new" className="item">
            <div style={{ fontSize: "13px", color: "white" }}>
              <Icon name="plus square" color="blue" size="large" />
              <b>Ticket</b>
            </div>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export { LogoHeader };
