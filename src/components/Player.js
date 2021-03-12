import React from 'react';

let cElement

class Player extends React.PureComponent {
  constructor() {
    super()
    this.state = {
      id: "qq09UkPRdFY",
      isReady: false,
      isPaused: true,
    }
    this.togglePause = this.togglePause.bind(this)
    this.onPlayerReady = this.onPlayerReady.bind(this)
  }


  componentDidMount = () => {

    // On mount, check to see if the API script is already loaded
    if (!window.YT) { // If not, load the script asynchronously
      const tag = document.createElement('script');
      tag.src = './script.js'

      // onYouTubeIframeAPIReady will load the video after the script is loaded
      window.onYouTubeIframeAPIReady = this.loadVideo;

      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      // var url = window.location.pathname;

    } else { // If script is already there, load the video directly
      this.loadVideo();
    }
  };

  componentDidUpdate


  loadVideo = () => {
    const { id } = this.state;

    // the Player object is created uniquely based on the id in props
    this.player = new window.YT.Player(`youtube-player-${id}`, {
      videoId: id,
      playerVars: {
        autoplay: 1,
      },
      events: {
        onReady: this.onPlayerReady,
      },
    });
  };

  onPlayerReady = event => {
    this.setState({isReady: true})
    cElement = event
    // event.target.playVideo();
  };

  togglePause(event) {
    let action = event.target.innerText

    if (action === "Play"){
      console.log("Play")
      this.setState({isPaused: false})
      cElement.target.playVideo();

    } else if (action === "Pause"){
      console.log("Pause")
      this.setState({isPaused: true})
      cElement.target.pauseVideo()
    }
  }

  render = () => {
    const { id } = this.state;

    return (
      <div>

        <div>
          <p>Howdy</p>
          {this.state.isReady
          ? <button type="button" onClick={this.togglePause}>{this.state.isPaused
              ? "Play"
              : "Pause"
              }</button>
          : <button disabled>Play</button>}

          <button>Next</button>
        </div>

        <div id={`youtube-player-${id}`} />
      </div>
    );
  };
}

export default Player;
