"use-es6";

import React, { Component } from "react";
import gsap from "gsap";
import { ReactComponent as Remove } from "../svgs/LinkedList/linkedlist-remove-from-front.svg";
import PausePlayButtons from "./PausePlayButtons";
import { Header } from "semantic-ui-react";

class LinkedListRemoveFromFront extends Component {
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
      const el = document.getElementById("head-pointer-remove-from-front");
      el.classList.add("rotate-tail-arrow");
      tween.play();
      return;
    }
    const el = document.getElementById("head-pointer-remove-from-front");
    el.classList.add("rotate-tail-arrow");
    tween.to("#front-to-remove", { duration: 0.75, opacity: 0 }, "+=.5");
  }

  handleResetClick() {
    const { tween } = this.state;
    tween.restart().pause();
    const el = document.getElementById("head-pointer-remove-from-front");
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
        <Header>removeFromFront()</Header>
        <PausePlayButtons
          handlePlayClick={this.handlePlayClick}
          handleResetClick={this.handleResetClick}
        />
        <Remove style={{ width: "80%" }} />
      </div>
    );
  }
}
export default LinkedListRemoveFromFront;
