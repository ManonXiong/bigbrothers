import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";

const LogoHeader = () => {
  return(
    <div className='ui secondary menu'>
      <Link to="/tickets" className="item">
        Tickets
      </Link>
      <div className = "right menu">
        <Button className="item">
            <Link to="/project/detail">
              <Icon name="plus square" />
              Project
            </Link>
          </Button>
          <Button className="item">
            <Link to="/ticket/detail" className="item">
              <Icon name="plus square" />
              Ticket
            </Link>
          </Button>
      </div>
    </div>
  );
};

export { LogoHeader };
