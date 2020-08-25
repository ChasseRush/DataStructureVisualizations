import React, { Component } from "react";
import gsap from "gsap";
import { ReactComponent as GetLinearProbing } from "../../svgs/HashMap/hashmap-get-linear-probing.svg";
import PausePlayButtons from "../PausePlayButtons";
import { Header } from "semantic-ui-react";

export class HashMapGetLinearProbing extends Component {
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
      .to("#pointer-get-linear-probing-0", { duration: 0.5, opacity: 1 })
      .to("#get-current-key-linear-probing", {
        duration: 0.5,
        fill: "#FFD700",
      })
      .to("#get-removed-flag-linear-probing", {
        duration: 0.5,
        fill: "#FFD700",
      })
      .to(
        "#get-removed-flag-linear-probing",
        {
          duration: 0.5,
          fill: "#B03060",
        },
        "+=.3"
      )
      .to("#pointer-get-linear-probing-0", { duration: 0.5, opacity: 0 })
      .to("#pointer-get-linear-probing-1", { duration: 0.5, opacity: 1 })
      .to("#get-key-al-linear-probing", {
        duration: 0.5,
        fill: "#FFD700",
      })
      .to(
        "#get-key-al-linear-probing",
        {
          duration: 0.5,
          fill: "#016936",
        },
        "+=.5"
      )
      .to(
        "#get-current-key-linear-probing",
        {
          duration: 0.5,
          fill: "#016936",
        },
        "-=.5"
      )
      .to(
        "#hashmap-return-get-linear-probing",
        { duration: 0.5, opacity: 1 },
        "+=.2"
      );
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
        <Header>get("al")</Header>
        <p>
          First, we'll need the index, so in our <code>get(K key)</code>, we'll
          do the following:
        </p>
        <code>
          int hashedIndex = hashingFunction(key) /* hashedIndex = 2 */
        </code>
        <p>
          Now, this example follows our example above where we removed our
          friend Sue from our HashMap. With the index we received from our
          hashing function, we see that the node that exists there does not have
          a value or a key, but it does have a removed flag. So, this tells us
          to keep probing as Al could have been added after we added Sue, and it
          could have had a collision with Sue. So, we'll keep probing until we
          either find our node or we find a null value. In this case, the next
          node has the key of "al". All we have to do is just return the value
          of that <code>Pair{"<K key, V value>"}</code>.
        </p>

        <PausePlayButtons
          handlePlayClick={this.handlePlayClick}
          handleResetClick={this.handleResetClick}
        />

        <GetLinearProbing className="animated-svg" />
      </div>
    );
  }
}

export default HashMapGetLinearProbing;
