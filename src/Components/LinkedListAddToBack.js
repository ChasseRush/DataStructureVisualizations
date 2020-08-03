"use-es6";

import React, { Component } from "react";
import gsap from "gsap";
import { ReactComponent as Add } from "../svgs/LinkedList/linkedlist-addToBack.svg";
import PausePlayButtons from "./PausePlayButtons";
import { Header } from "semantic-ui-react";

class LinkedListAddToBack extends Component {
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
        const el = document.getElementById("tail-arrow-add-to-back");
        el.classList.add("rotate-tail-arrow");
      });
      return;
    }
    tween
      .to("#added-d-to-back", { duration: 0.75, opacity: 1 })
      .to("#old-null", { duration: 0.5, opacity: 0 }, "+=.1")
      .to("#added-d-to-back", { duration: 0.75, y: 0 })
      .then(() => {
        const el = document.getElementById("tail-arrow-add-to-back");
        el.classList.add("rotate-tail-arrow");
      });
  }

  handleResetClick() {
    const { tween } = this.state;
    tween.restart().pause();
    const el = document.getElementById("tail-arrow-add-to-back");
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
        <Header>addToBack("d")</Header>
        <PausePlayButtons
          handlePlayClick={this.handlePlayClick}
          handleResetClick={this.handleResetClick}
        />
        <Add style={{ width: "80%" }} />
      </div>
    );
  }
}
export default LinkedListAddToBack;
