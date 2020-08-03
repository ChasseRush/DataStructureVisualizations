"use-es6";

import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import SidebarContainer from "./SidebarContainer";
import { getComponentToRender } from "../Helpers/componentHelpers";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const { dataStructure } = this.props.match.params;
    const { history } = this.props;
    console.log(history);
    const CurrentComponent = getComponentToRender(dataStructure);
    return (
      <SidebarContainer
        currentlyActive={dataStructure}
        history={history}
        className="app-container"
      >
        <Segment basic>
          <CurrentComponent />
        </Segment>
      </SidebarContainer>
    );
  }
}

export default AppContainer;
