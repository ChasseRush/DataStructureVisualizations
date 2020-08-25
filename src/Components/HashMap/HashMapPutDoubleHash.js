import React, { Component } from "react";
import gsap from "gsap";
import { ReactComponent as PutWithDoubleHash } from "../../svgs/HashMap/hashmap-put-double-hash.svg";
import PausePlayButtons from "../PausePlayButtons";
import { Header } from "semantic-ui-react";

export class HashMapPutDoubleHash extends Component {
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
      .to("#pair-to-add-double-hash", { duration: 0.5, opacity: 1 })
      .to("#pointer-double-hash-0", { duration: 0.5, opacity: 0 }, "+=.3")
      .call(this.incrementStep)
      .to("#pointer-double-hash-1", { duration: 0.5, opacity: 1 }, "+=.3")
      .to("#pair-to-add-double-hash", { duration: 0.5, opacity: 0 })
      .to("#pair-to-add-double-hash-added", { duration: 0.5, opacity: 1 });
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
      indexStr = "index = (hashedIndex + 0 * doubleHash(hashedIndex)) = 2";
    } else if (step === 1) {
      indexStr =
        "index = (hashedIndex + 1 * doubleHash(hashedIndex)) % arr.length = 2 + 1 * 4 = 6";
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
          int hashedIndex = hashingFunction(key) /* hashedIndex = 2 */
        </code>
        <p>
          Now, with the index, we see that a node already exists at hashedIndex
          = 2, so we'll have to use our second hasing function and multiply that
          by the number of times we have to probe until we find a place for our
          new <code>Pair{"<K key, V value>"}</code>. So, first we'll increment
          by <code>1 * doubleHash(hashedIndex)</code>, then{" "}
          <code>2 * doubleHash(hashedIndex)</code>, and so on. In this case,
          let's say that our second hashing function has this psuedocode:
        </p>
        <code
          style={{
            marginBottom: 12,
            padding: "8px 24px",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <span style={{ color: "#016936" }}>int</span>{" "}
          <span style={{ color: "#FFD700" }}>doubleHash</span>(
          <span style={{ color: "#016936" }}>int</span>{" "}
          <span style={{ color: "#0E6EB8" }}>hashedIndex</span>) {"{"} <br />
          &emsp; <span style={{ color: "#B03060" }}>return</span> 2 *{" "}
          <span style={{ color: "#0E6EB8" }}>hashedIndex</span> <br />
          {"}"}
        </code>

        <PausePlayButtons
          handlePlayClick={this.handlePlayClick}
          handleResetClick={this.handleResetClick}
        />
        <Header as="h3">
          <code>{indexStr}</code>
        </Header>
        <PutWithDoubleHash className="animated-svg" />
      </div>
    );
  }
}

export default HashMapPutDoubleHash;
