"use-es6";

import React, { Component } from "react";
import { Menu, Sidebar, Responsive } from "semantic-ui-react";
import DesktopSidebarComponent from "../Components/DesktopSidebarComponent";
import MobileSidebarComponent from "../Components/MobileSidebarComponent";

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
      <div>
        <Responsive minWidth={480}>
          <DesktopSidebarComponent
            activeLink={activeLink}
            handleLinkClick={this.handleLinkClick}
          >
            {this.props.children}
          </DesktopSidebarComponent>
        </Responsive>
        <Responsive maxWidth={479}>
          <MobileSidebarComponent
            activeLink={activeLink}
            handleLinkClick={this.handleLinkClick}
          >
            {this.props.children}
          </MobileSidebarComponent>
        </Responsive>
      </div>
    );
  }
}

export default SidebarContainer;
