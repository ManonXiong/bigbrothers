import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";

const LogoHeader = () => {
  return(
    <div
      className='ui secondary menu'
      style={{
        backgroundColor: "orange",
        display: "flex",
        justifyContent: "flex-start",
        marginBottom: "15px"
      }}>
      <Link to="/" className="item">
        <b>Home</b>
      </Link>
      <Link to="/tickets" className="item">
        Tickets
      </Link>
      <div className = "right menu">
        <Button className="item">
          <Link to="/project/new" className="item">
            <Icon name="plus square" color="blue" />
            Project
          </Link>
        </Button>
        <Button className="item">
          <Link to="/ticket/new" className="item">
            <Icon name="plus square" color="blue" />
            Ticket
          </Link>
        </Button>
      </div>
    </div>
  );
};

export { LogoHeader };
