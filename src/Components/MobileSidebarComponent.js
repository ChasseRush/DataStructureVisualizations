"use-es6";

import React, { Component } from "react";
import { Menu, Sidebar, Header, Grid } from "semantic-ui-react";
import Burger from "@animated-burgers/burger-slip";
import "@animated-burgers/burger-slip/dist/styles.css";

class MobileSidebarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.handleSidebarClose = this.handleSidebarClose.bind(this);
  }

  toggleSidebar() {
    const { sidebarOpen } = this.state;
    this.setState({
      sidebarOpen: !sidebarOpen,
    });
  }

  handleSidebarClose() {
    this.setState({
      sidebarOpen: false,
    });
  }

  render() {
    const { activeLink } = this.props;
    const { sidebarOpen } = this.state;
    return (
      <div className="app-container">
        <Header
          as="h3"
          dividing
          style={{ backgroundColor: "black", color: "white", marginBottom: 0 }}
        >
          <Grid padded={8} verticalAlign="middle">
            <Grid.Column
              width={12}
              onClick={() => this.props.handleLinkClick("")}
            >
              Visual Data Structures
            </Grid.Column>
            <Grid.Column>
              <Burger
                Component="button"
                type="button"
                isOpen={sidebarOpen}
                style={{
                  backgroundColor: "inherit",
                  border: 0,
                  color: "black",
                }}
                onClick={this.toggleSidebar}
              />
            </Grid.Column>
          </Grid>
        </Header>
        <Sidebar.Pushable
          as={Menu}
          className="app-container"
          style={{ marginTop: 0 }}
        >
          <Sidebar
            as={Menu}
            visible={sidebarOpen}
            animation="overlay"
            width="thin"
            icon="labeled"
            vertical
            inverted
            onHide={this.handleSidebarClose}
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
          <Sidebar.Pusher dimmed={sidebarOpen}>
            {this.props.children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default MobileSidebarComponent;
