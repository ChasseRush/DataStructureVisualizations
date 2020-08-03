"use-es6";

import React, { Component } from "react";
import { Segment, Container, Header } from "semantic-ui-react";
import SidebarContainer from "./SidebarContainer";

class LandingContainer extends Component {
  render() {
    const { dataStructure } = this.props.match.params;
    const { history } = this.props;
    return (
      <SidebarContainer
        currentlyActive={dataStructure}
        history={history}
        className="app-container"
      >
        <div className="landing-container">
          <Header as="h1" textAlign="center" style={{ color: "white" }}>
            Welcome to Data Structure Visualizations
          </Header>
          <Header as="h3" textAlign="center" style={{ color: "white" }}>
            A tool designed to help you learn data structures
          </Header>
        </div>
        <Segment basic>
          <Container className="text-container">
            <Header as="h3">Learn data structures</Header>
            <p style={{ fontSize: "1.15rem" }}>
              Understanding data structures is crucial in developing a
              foundation as an aspiring software engineer, so much so that they
              are at the center of most interview questions. Data structures
              will also help you in further studies, as you will learn more
              complex algorithms and solutions that rely on the use of these
              data structures. Data structures are at the core of your growth as
              a student or developer, and this tool is designed to help you
              learn better.
            </p>
            <Header as="h3">Getting started</Header>
            <p style={{ fontSize: "1.15rem" }}>
              To get started, just click on one of the data structures in the
              bar to the side and it will bring you to our page about that data
              structure. It's ordered in a way that such that each data
              structure builds on concepts covered in the ones that came before
              it, so if you're new to data structures, just start at the top and
              work your way down. Whether you're a student or someone brushing
              up their skills for an interview, you'll be able to learn what you
              need right here.
            </p>
          </Container>
        </Segment>
      </SidebarContainer>
    );
  }
}

export default LandingContainer;
