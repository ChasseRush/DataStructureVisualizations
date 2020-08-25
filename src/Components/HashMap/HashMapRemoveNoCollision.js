import React, { Component } from "react";
import gsap from "gsap";
import { ReactComponent as RemoveWithNoCollision } from "../../svgs/HashMap/hashmap-remove-no-collision.svg";
import PausePlayButtons from "../PausePlayButtons";
import { Header } from "semantic-ui-react";

export class HashMapRemoveNoCollision extends Component {
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
      .to("#pointer-remove-no-collision", { duration: 0.5, opacity: 1 })
      .to("#current-key", { duration: 0.5, fill: "#FFD700" })
      .to("#key-sue", { duration: 0.5, fill: "#FFD700" })
      .to("#current-key", { duration: 0.5, fill: "#016936" }, "+=.3")
      .to("#key-sue", { duration: 0.5, fill: "#016936" }, "-=.5")
      .to("#params-to-remove-no-collision", { duration: 0.5, opacity: 0 })
      .to("#removed-flag-no-collision", { duration: 0.5, opacity: 1 });
  }

  handleResetClick() {
    const { tween } = this.state;
    tween.restart().pause();
  }

  render() {
    return (
      <div>
        <p>
          In this first example, we'll go over how you'd remove the{" "}
          <code>Pair{"<K key, V value>"}</code> when you're using linear probing
          but you don't have a collision. Let's say that our friend Sue decides
          that she doesn't want to use our color app anymore. So we're going to
          remove her mapping of her favorite color from our HashMap to free up
          some space.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Header>remove("sue")</Header>
          <p>
            First, we'll need the index, so in our <code>remove(K key)</code>,
            we'll do the following:
          </p>
          <code>
            int hashedIndex = hashingFunction(key) /* hashedIndex = 2 */
          </code>
          <p>
            Now, with the index, we see that the node that exists there has the
            key that we're looking for. Since we know that keys are unique, this
            is the only key of Sue in our HashMap and is thus the key we're
            looking for! <strong>NOTE:</strong> I've used <code>rem</code> as a
            shorthanded version of the <code>removed</code> flag.
          </p>

          <PausePlayButtons
            handlePlayClick={this.handlePlayClick}
            handleResetClick={this.handleResetClick}
          />

          <RemoveWithNoCollision className="animated-svg" />
        </div>
      </div>
    );
  }
}

export default HashMapRemoveNoCollision;
