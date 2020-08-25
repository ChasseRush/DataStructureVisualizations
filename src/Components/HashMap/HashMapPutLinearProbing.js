import React, { Component } from "react";
import gsap from "gsap";
import { ReactComponent as PutWithLinearProbing } from "../../svgs/HashMap/hashmap-put-linear-probing.svg";
import PausePlayButtons from "../PausePlayButtons";
import { Header } from "semantic-ui-react";

export class HashMapPutLinearProbing extends Component {
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
      .to("#pair-to-add-linear-probing", { duration: 0.5, opacity: 1 }, "+=.5")
      .to("#pointer-linear-probing", { duration: 0.5, opacity: 0 })
      .to(
        "#pointer-linear-probing-3",
        {
          duration: 0.5,
          opacity: 1,
        },
        "+=.4"
      )
      .to("#pointer-linear-probing-3", {
        duration: 0.5,
        opacity: 0,
      })
      .to(
        "#pointer-linear-probing-4",
        {
          duration: 0.5,
          opacity: 1,
        },
        "+=.2"
      )
      .to("#pair-to-add-linear-probing", {
        duration: 0.5,
        opacity: 0,
      })
      .to("#pair-to-add-linear-probing-added", {
        duration: 0.5,
        opacity: 1,
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
        <code>int index = hashingFunction(key) /* index = 2 */</code>
        <p>
          Now, with the index, we see that a node already exists at index = 2,
          so we have to keep incrementing our index by 1 until we find an empty
          space for our new <code>Pair{"<K key, V value>"}</code>
        </p>
        <PausePlayButtons
          handlePlayClick={this.handlePlayClick}
          handleResetClick={this.handleResetClick}
        />
        <PutWithLinearProbing className="animated-svg" />
      </div>
    );
  }
}

export default HashMapPutLinearProbing;
