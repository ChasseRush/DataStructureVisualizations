"use-es6";

import React, { Component } from "react";
import { Menu, Header, Sidebar, Segment } from "semantic-ui-react";

class SidebarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLink: props.currentlyActive,
    };
    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  handleLinkClick(link) {
    const { history } = this.props;
    history.push(link);
    this.setState({
      activeLink: link,
    });
  }

  render() {
    const { activeLink } = this.state;
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
          <Header as="h3" style={{ paddingTop: 24, color: "white" }}>
            Visual Data Structures
          </Header>
          <Menu.Item
            name="arraylist"
            active={activeLink === "arraylist"}
            onClick={() => this.handleLinkClick("arraylist")}
          >
            ArrayList
          </Menu.Item>
          <Menu.Item
            name="linkedlist"
            active={activeLink === "linkedlist"}
            onClick={() => this.handleLinkClick("linkedlist")}
          >
            LinkedList
          </Menu.Item>
          <Menu.Item
            name="stack"
            active={activeLink === "stack"}
            onClick={() => this.handleLinkClick("stack")}
          >
            Stack
          </Menu.Item>
          <Menu.Item
            name="queue"
            active={activeLink === "queue"}
            onClick={() => this.handleLinkClick("queue")}
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

export default SidebarContainer;
