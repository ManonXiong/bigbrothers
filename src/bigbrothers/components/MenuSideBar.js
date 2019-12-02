import React, { useState } from "react";
import { Menu, Sidebar, Segment, Header } from "semantic-ui-react";

const MenuSideBar = () => {
  const [visible, setVisible] = useState({ name: 'visible' });
  return (
    <Sidebar.Pushable as={Segment}>
      <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        inverted
        onHide={()=>setVisible(false)}
        vertical
        visible={visible}
        width='thin'
      >
        <Menu.Item as='a'>
          Tickets
        </Menu.Item>
        <Menu.Item as='a'>
          Projects
        </Menu.Item>
        <Menu.Item>
          Create Ticket
        </Menu.Item>
        <Menu.Item>
          Create Project
        </Menu.Item>
        <Menu.Item>
          Reports
        </Menu.Item>
      </Sidebar>
      <Sidebar.Pusher>
        <Segment basic>
          <Header as='header'>Application Content</Header>
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  )
};

export default MenuSideBar;