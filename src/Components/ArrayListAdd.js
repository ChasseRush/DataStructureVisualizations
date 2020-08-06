"use-es6";

import React, { Component } from "react";
import gsap from "gsap";
import { ReactComponent as Add } from "../svgs/add.svg";
import PausePlayButtons from "./PausePlayButtons";

class ArrayListAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tween: gsap.timeline(),
    };
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  handlePlayClick() {
    const { tween } = this.state;
    if (tween.paused()) {
      tween.play();
      return;
    }
    tween
      .to("#add8", { duration: 1, x: 0, y: 0 })
      .to("#size-5", { duration: 0.5, opacity: 0 })
      .to("#size-6", { duration: 0.5, opacity: 1 });
  }

  handleResetClick() {
    const { tween } = this.state;
    tween.restart().pause();
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <PausePlayButtons
          handlePlayClick={this.handlePlayClick}
          handleResetClick={this.handleResetClick}
        />
        <Add className="animated-svg" />
      </div>
    );
  }
}

export default ArrayListAdd;
