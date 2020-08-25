import React, { Component } from "react";
import gsap from "gsap";
import { ReactComponent as GetWithNoCollision } from "../../svgs/HashMap/hashmap-get-no-collision.svg";
import PausePlayButtons from "../PausePlayButtons";
import { Header } from "semantic-ui-react";

export class HashMapGetNoCollision extends Component {
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
      .to("#pointer-get-no-collision", { duration: 0.5, opacity: 1 })
      .to("#get-current-key-no-collision", { duration: 0.5, fill: "#FFD700" })
      .to("#get-key-sue-no-collision", { duration: 0.5, fill: "#FFD700" })
      .to(
        "#get-current-key-no-collision",
        { duration: 0.5, fill: "#016936" },
        "+=.3"
      )
      .to(
        "#get-key-sue-no-collision",
        { duration: 0.5, fill: "#016936" },
        "-=.5"
      )
      .to("#hashmap-return-get-no-collision", {
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
        <Header>get("sue")</Header>
        <p>
          First, we'll need the index, so in our <code>get(K key)</code>, we'll
          do the following:
        </p>
        <code>
          int hashedIndex = hashingFunction(key) /* hashedIndex = 2 */
        </code>
        <p>
          Now, with the index, we see that the node that exists there has the
          key that we're looking for. Since we know that keys are unique, this
          is the only key of Sue in our HashMap and is thus the key we're
          looking for! All we have to do is just return the value of that{" "}
          <code>Pair{"<K key, V value>"}</code>
        </p>

        <PausePlayButtons
          handlePlayClick={this.handlePlayClick}
          handleResetClick={this.handleResetClick}
        />

        <GetWithNoCollision className="animated-svg" />
      </div>
    );
  }
}

export default HashMapGetNoCollision;
