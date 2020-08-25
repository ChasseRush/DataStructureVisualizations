import React, { Component } from "react";
import gsap from "gsap";
import { ReactComponent as RemoveWithLinearProbing } from "../../svgs/HashMap/hashmap-remove-linear-probing.svg";
import PausePlayButtons from "../PausePlayButtons";
import { Header } from "semantic-ui-react";

export class HashMapRemoveLinearProbing extends Component {
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
      .to("#pointer-remove-linear-probing-0", { duration: 0.5, opacity: 1 })
      .to("#current-key-remove-linear-probing", {
        duration: 0.5,
        fill: "#FFD700",
      })
      .to("#key-sue-linear-probing", {
        duration: 0.5,
        fill: "#B03060",
      })
      .to(
        "#key-sue-linear-probing",
        {
          duration: 0.5,
          fill: "black",
        },
        "+=.3"
      )
      .to("#pointer-remove-linear-probing-0", { duration: 0.5, opacity: 0 })
      .to("#pointer-remove-linear-probing-1", { duration: 0.5, opacity: 1 })
      .to("#key-al-linear-probing", {
        duration: 0.5,
        fill: "#FFD700",
      })
      .to(
        "#current-key-remove-linear-probing",
        { duration: 0.5, fill: "#016936" },
        "+=.3"
      )
      .to(
        "#key-al-linear-probing",
        {
          duration: 0.5,
          fill: "#016936",
        },
        "-=.5"
      )
      .to(
        "#params-to-remove-linear-probing",
        {
          duration: 0.5,
          opacity: 0,
        },
        "+=.3"
      )
      .to("#removed-flag-linear-probing", {
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
        <Header>remove("al") /* linear probing */</Header>
        <p>
          First, we'll need the index, so in our <code>remove(K key)</code>,
          we'll do the following:
        </p>
        <code>
          int hashedIndex = hashingFunction(key) /* hashedIndex = 2 */
        </code>
        <p>
          Now, with the index, we see that the node that exists there has a
          different key from the one that we're looking for. Since we know that
          we've been using a linear probing collision strategy, we keep on
          incrementing our index until we either find our key or we hit an null
          value and thus it does not exist in our HashMap.
        </p>

        <PausePlayButtons
          handlePlayClick={this.handlePlayClick}
          handleResetClick={this.handleResetClick}
        />

        <RemoveWithLinearProbing className="animated-svg" />
      </div>
    );
  }
}

export default HashMapRemoveLinearProbing;
