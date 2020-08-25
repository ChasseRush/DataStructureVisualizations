"use-es6";

import React, { Component } from "react";
import gsap from "gsap";
import { ReactComponent as PutWithoutCollision } from "../../svgs/HashMap/hashmap-add-no-collision.svg";
import PausePlayButtons from "../PausePlayButtons";
import { Header } from "semantic-ui-react";

export class HashMapPutNoCollision extends Component {
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
      .to("#pair-to-add-no-collision", { duration: 0.5, opacity: 1 })
      .to("#pointer", { duration: 0.5, opacity: 1 }, "+=.2")
      .to("#pair-to-add-no-collision", {
        duration: 0.5,
        translateY: 53,
        translateX: 50,
      });
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
        <Header>put("sam", "blue")</Header>
        <p>
          First, we'll need the index, so in our{" "}
          <code>put(K key, V value)</code>, we'll do the following:
        </p>
        <code>int index = hashingFunction(key) /* index = 4 */</code>
        <p>Now, with the index, adding to the HashMap will look like this:</p>
        <PausePlayButtons
          handlePlayClick={this.handlePlayClick}
          handleResetClick={this.handleResetClick}
        />
        <PutWithoutCollision className="animated-svg" />
      </div>
    );
  }
}

export default HashMapPutNoCollision;
