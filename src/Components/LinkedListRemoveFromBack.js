"use-es6";

import React, { Component } from "react";
import gsap from "gsap";
import { ReactComponent as Remove } from "../svgs/LinkedList/linkedlist-removeFromBack.svg";
import PausePlayButtons from "./PausePlayButtons";
import { Header } from "semantic-ui-react";

class LinkedListRemoveFromBack extends Component {
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
        const el = document.getElementById("tail-pointer-remove-from-back");
        el.classList.add("rotate-arrow");
      });
      return;
    }
    tween
      .to(".arrow-stagger-1", { duration: 0.5, fill: "#e3c800" })
      .to(".arrow-stagger-2", { duration: 0.5, fill: "#e3c800" }, "+=.5")
      .to(".arrow-stagger-3", { duration: 0.5, fill: "#e3c800" })
      .to("#to-remove-from-back-of-list", { duration: 0.75, opacity: 0 })
      .to("#old-null-remove-from-back", { duration: 0.5, opacity: 1 }, "+=.2")
      .then(() => {
        const el = document.getElementById("tail-pointer-remove-from-back");
        el.classList.add("rotate-arrow");
      });
  }

  handleResetClick() {
    const { tween } = this.state;
    tween.restart().pause();
    const el = document.getElementById("tail-pointer-remove-from-back");
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
        <Header>removeFromBack()</Header>
        <PausePlayButtons
          handlePlayClick={this.handlePlayClick}
          handleResetClick={this.handleResetClick}
        />
        <Remove className="animated-svg" />
      </div>
    );
  }
}
export default LinkedListRemoveFromBack;
