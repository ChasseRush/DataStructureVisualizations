"use-es6";

import React, { Component } from "react";
import gsap from "gsap";
import { ReactComponent as Get } from "../svgs/get.svg";
import PausePlayButtons from "./PausePlayButtons";

class ArrayListGetComponent extends Component {
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
      .to("#index-3", { duration: 1, x: 0, y: 0 })
      .to("#ret-2", { duration: 0.5, fill: "yellow", opacity: 0.5 })
      .to("#index-arrow", { duration: 0.5, opacity: 1 }, "-=.4")
      .to("#return-2", { duration: 0.5, opacity: 1 });
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
        <Get className="animated-svg" />
      </div>
    );
  }
}

export default ArrayListGetComponent;
