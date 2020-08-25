import React, { Component } from "react";
import gsap from "gsap";
import { ReactComponent as PutWithQuadraticProbing } from "../../svgs/HashMap/hashmap-put-quadratic-probing.svg";
import PausePlayButtons from "../PausePlayButtons";
import { Header } from "semantic-ui-react";

export class HashMapPutQuadraticProbing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tween: gsap.timeline(),
      step: 0,
    };
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.incrementStep = this.incrementStep.bind(this);
    this.resetStep = this.resetStep.bind(this);
  }

  handlePlayClick() {
    const { tween } = this.state;
    if (tween.paused()) {
      tween.play();
      return;
    }
    tween
      .to("#pair-to-add-quad-probing", { duration: 0.5, opacity: 1 })
      .to("#pointer-quad-0", { duration: 0.5, opacity: 0 })
      .call(this.incrementStep)
      .to("#pointer-quad-1", { duration: 0.5, opacity: 1 }, "+=.8")
      .call(this.incrementStep)
      .to("#pointer-quad-1", { duration: 0.5, opacity: 0 }, "+=.8")
      .to("#pointer-quad-2", { duration: 0.5, opacity: 1 })
      .to(
        "#pair-to-add-quad-probing",
        {
          duration: 0.5,
          translateX: -53,
          translateY: 55,
        },
        "+=.3"
      );
  }

  handleResetClick() {
    const { tween } = this.state;
    tween.restart().pause();
    this.resetStep();
  }

  incrementStep() {
    this.setState({
      step: this.state.step + 1,
    });
  }

  resetStep() {
    this.setState({
      step: 0,
    });
  }

  render() {
    const { step } = this.state;
    let indexStr = "";
    if (step === 0) {
      indexStr = "index = hashedIndex = 3";
    } else if (step === 1) {
      indexStr = "index = (hashedIndex + 1*1) % arr.length = 4";
    } else if (step === 2) {
      indexStr = "index = (hashedIndex + 2*2) % arr.length = 0";
    }

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
        <code>
          int hashedIndex = hashingFunction(key) /* hashedIndex = 3 */
        </code>
        <p>
          Now, with the index, we see that a node already exists at hashedIndex
          = 3, so we'll have to keep probing quadratically until we find a place
          for our new <code>Pair{"<K key, V value>"}</code>. So, first we'll
          increment by 1 and check for a free space, then by 4 (2 * 2), then by
          9 (3 * 3), etc.
        </p>
        <PausePlayButtons
          handlePlayClick={this.handlePlayClick}
          handleResetClick={this.handleResetClick}
        />
        <Header as="h3">
          <code>{indexStr}</code>
        </Header>
        <PutWithQuadraticProbing className="animated-svg" />
      </div>
    );
  }
}

export default HashMapPutQuadraticProbing;
