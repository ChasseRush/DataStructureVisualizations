"use-es6";

import React, { Component } from "react";
import { Menu, Sidebar } from "semantic-ui-react";

class DesktopSidebarComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { activeLink } = this.props;
    return (
      <Sidebar.Pushable as={Menu} className="app-container">
        <Sidebar
          as={Menu}
          visible={true}
          animation="push"
          width="wide"
          icon="labeled"
          vertical
          inverted
        >
          <Menu.Header
            as="h3"
            style={{ paddingTop: 24, color: "white", cursor: "pointer" }}
            onClick={() => this.props.handleLinkClick("")}
          >
            Visual Data Structures
          </Menu.Header>
          <Menu.Item
            name="arraylist"
            active={activeLink === "arraylist"}
            onClick={() => this.props.handleLinkClick("arraylist")}
          >
            ArrayList
          </Menu.Item>
          <Menu.Item
            name="linkedlist"
            active={activeLink === "linkedlist"}
            onClick={() => this.props.handleLinkClick("linkedlist")}
          >
            LinkedList
          </Menu.Item>
          <Menu.Item
            name="stack"
            active={activeLink === "stack"}
            onClick={() => this.props.handleLinkClick("stack")}
          >
            Stack
          </Menu.Item>
          <Menu.Item
            name="queue"
            active={activeLink === "queue"}
            onClick={() => this.props.handleLinkClick("queue")}
          >
            Queue
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher style={{ width: "calc(100% - 350px)" }}>
          {this.props.children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

export default DesktopSidebarComponent;
