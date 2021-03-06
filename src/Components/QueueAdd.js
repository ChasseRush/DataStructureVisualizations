"use-es6";

import React, { Component } from "react";
import gsap from "gsap";
import { ReactComponent as Add } from "../svgs/Queue/queue-add.svg";
import PausePlayButtons from "./PausePlayButtons";
import { Header } from "semantic-ui-react";

class QueueAdd extends Component {
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
        const el = document.getElementById("queue-add-tail-pointer");
        el.classList.add("rotate-tail-arrow");
      });
      return;
    }
    tween
      .to("#queue-add-d", { duration: 0.75, opacity: 1 })
      .to("#queue-add-old-null", { duration: 0.5, opacity: 0 }, "+=.1")
      .to("#queue-add-d", { duration: 0.75, y: 0 })
      .then(() => {
        const el = document.getElementById("queue-add-tail-pointer");
        el.classList.add("rotate-tail-arrow");
      });
  }

  handleResetClick() {
    const { tween } = this.state;
    tween.restart().pause();
    const el = document.getElementById("queue-add-tail-pointer");
    el.classList.remove("rotate-tail-arrow");
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
        <Header>add("d")</Header>
        <PausePlayButtons
          handlePlayClick={this.handlePlayClick}
          handleResetClick={this.handleResetClick}
        />
        <Add className="animated-svg" />
      </div>
    );
  }
}
export default QueueAdd;
