"use-es6";

import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";

class PausePlayButtons extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingBottom: 16,
        }}
      >
        <Button
          icon
          labelPosition="left"
          style={{ maxWidth: 250 }}
          onClick={this.props.handlePlayClick}
        >
          <Icon name="play" />
          Play
        </Button>
        <Button
          icon
          labelPosition="left"
          style={{ maxWidth: 250 }}
          onClick={this.props.handleResetClick}
        >
          <Icon name="repeat" />
          Repeat
        </Button>
      </div>
    );
  }
}

export default PausePlayButtons;
