"use-es6";

import React, { Component } from "react";
import gsap from "gsap";
import { ReactComponent as Push } from "../svgs/Stack/stack-push.svg";
import PausePlayButtons from "./PausePlayButtons";
import { Header } from "semantic-ui-react";

class StackPush extends Component {
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
      tween.play().then(() => {
        const el = document.getElementById("stack-head-pointer");
        el.classList.add("rotate-arrow");
      });
      return;
    }
    tween
      .to("#stack-added-d", { duration: 0.5, opacity: 1 })
      .to("#stack-next-pointer", { duration: 0.5, opacity: 1 }, "+=.2")
      .then(() => {
        const el = document.getElementById("stack-head-pointer");
        el.classList.add("rotate-arrow");
      });
  }

  handleResetClick() {
    const { tween } = this.state;
    tween.restart().pause();
    const el = document.getElementById("stack-head-pointer");
    el.classList.remove("rotate-arrow");
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
        <Header>push("d")</Header>
        <PausePlayButtons
          handlePlayClick={this.handlePlayClick}
          handleResetClick={this.handleResetClick}
        />
        <Push className="animated-svg" />
      </div>
    );
  }
}

export default StackPush;
