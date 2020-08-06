"use-es6";

import React, { Component } from "react";
import gsap from "gsap";
import { ReactComponent as Remove } from "../svgs/remove.svg";
import PausePlayButtons from "./PausePlayButtons";

class ArrayListRemove extends Component {
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
      .to("#remove-c", { duration: 0.75, x: 0 })
      .to("#c-container", { duration: 0.25, fill: "yellow", opacity: 0.5 })
      .to("#c-remove", { duration: 0.75, opacity: 0 }, "+=.6")
      .to("#c-container", { duration: 0.5, fill: "transparent", opacity: 1 })
      .to("#remove-c", { duration: 0.5, opacity: 0 }, "-=.5")
      .to("#shift", { duration: 0.5, opacity: 1 }, "+=.3")
      .to(".arli-remove-shift", { duration: 0.75, translateX: -35 }, "+=.5")
      .to("#shift", { duration: 0.5, opacity: 0 });
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
        <Remove className="animated-svg" />
      </div>
    );
  }
}

export default ArrayListRemove;
