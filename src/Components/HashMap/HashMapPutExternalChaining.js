import React, { Component } from "react";
import gsap from "gsap";
import { ReactComponent as PutWithExternalChaining } from "../../svgs/HashMap/hashmap-put-external-chaining.svg";
import PausePlayButtons from "../PausePlayButtons";
import { Header } from "semantic-ui-react";

export class HashMapPutExternalChaining extends Component {
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
      .to("#pair-to-add-external-chaining", { duration: 0.5, opacity: 1 })
      .to(
        "#pointer-add-external-chaining",
        { duration: 0.5, opacity: 1 },
        "+=.2"
      )
      .to("#pair-to-add-external-chaining", {
        duration: 0.5,
        translateY: 48,
        translateX: 150,
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
        <code>int index = hashingFunction(key) /* index = 3 */</code>
        <p>
          Now, with the index, we see that a node already exists at index = 3,
          so we'll use external chaining to handle adding it
        </p>
        <PausePlayButtons
          handlePlayClick={this.handlePlayClick}
          handleResetClick={this.handleResetClick}
        />
        <PutWithExternalChaining
          className="animated-svg"
          style={{ height: 500 }}
        />
      </div>
    );
  }
}

export default HashMapPutExternalChaining;
