"use-es6";

import React, { Component } from "react";
import gsap from "gsap";
import { ReactComponent as Pop } from "../svgs/Stack/stack-pop.svg";
import { ReactComponent as Remove } from "../svgs/Queue/queue-remove.svg";
import PausePlayButtons from "./PausePlayButtons";
import { Header } from "semantic-ui-react";

class StackPop extends Component {
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
      const el = document.getElementById("stack-pop-head-pointer");
      el.classList.add("rotate-tail-arrow");
      tween.play();
      return;
    }
    const el = document.getElementById("stack-pop-head-pointer");
    el.classList.add("rotate-tail-arrow");
    tween.to("#node-to-pop", { duration: 0.75, opacity: 0 }, "+=.5");
  }

  handleResetClick() {
    const { tween } = this.state;
    tween.restart().pause();
    const el = document.getElementById("stack-pop-head-pointer");
    el.classList.remove("rotate-tail-arrow");
  }

  render() {
    const { useQueue } = this.props;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Header>{useQueue ? "remove()" : "pop()"}</Header>
        <PausePlayButtons
          handlePlayClick={this.handlePlayClick}
          handleResetClick={this.handleResetClick}
        />
        {useQueue ? (
          <Remove className="animated-svg" />
        ) : (
          <Pop className="animated-svg" />
        )}
      </div>
    );
  }
}

export default StackPop;
