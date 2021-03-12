import React from "react";
import "98.css";
import { Controls } from './index'

export default class Player extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      id: "qq09UkPRdFY",
      isReady: false,
      isPaused: true,
      cElement: null,
    };
    this.togglePause = this.togglePause.bind(this);
    this.onPlayerReady = this.onPlayerReady.bind(this);
  }

  componentDidMount = () => {
    // On mount, check to see if the API script is already loaded
    if (!window.YT) {
      // If not, load the script asynchronously
      const tag = document.createElement("script");
      tag.src = "./script.js";

      // onYouTubeIframeAPIReady will load the video after the script is loaded
      window.onYouTubeIframeAPIReady = this.loadVideo;

      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      // If script is already there, load the video directly
      this.loadVideo();
    }
  };

  componentDidUpdate;

  loadVideo = () => {
    const { id } = this.state;

    // the Player object is created uniquely based on the id in props
    this.player = new window.YT.Player(`youtube-player-${id}`, {
      videoId: id,
      playerVars: {
        autoplay: 1,
        playsinline: 1,
      },
      events: {
        onReady: this.onPlayerReady,
      },
    });
  };

  onPlayerReady = (event) => {
    this.setState({ isReady: true });
    this.setState({ cElement: event });
  };

  togglePause(event) {
    let action = event.target.innerText;

    if (action === "Play") {
      this.setState({ isPaused: false });
      this.state.cElement.target.playVideo();
    } else if (action === "Pause") {
      this.setState({ isPaused: true });
      this.state.cElement.target.pauseVideo();
    }
  }

  toggleNext(next) {
    this.setState({ id: next });
  }

  render = () => {
    const { id } = this.state;
    console.log("PLAYER RENDER, USER HAS PLAYER?", this.props.hasPlayer);

    return (
      <div>
        {/* <div className={true ? "window" : "hide"}>
          <div className="title-bar">
            <div className="title-bar-text">Discman</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize" />
              <button aria-label="Maximize" />
              <button aria-label="Close" />
            </div>
          </div>

          <div className="window-body">
            <p>Howdy</p>
            {this.state.isReady ? (
              <button type="button" onClick={this.togglePause}>
                {this.state.isPaused ? "Play" : "Pause"}
              </button>
            ) : (
              <button disabled>Play</button>
            )}
            <button>Next</button>
            </div>

         </div> */}
         <Controls isReady={this.state.isReady} isPaused={this.state.isPaused} togglePause={this.togglePause}/>

        <div style={{ position: "absolute", top: "-9999px", left: "-9999px" }}>
          <div id={`youtube-player-${id}`} />
        </div>
      </div>
    );
  };
}

