import React from "react";
import { connect } from "react-redux";
import { Controls } from "./index";
import "98.css";

class Player extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      songId: null,
      isReady: false,
      isPaused: true,
      cElement: null,
      singles: [],
      playlistIdx: null,
    };
    this.togglePause = this.togglePause.bind(this);
    this.onPlayerReady = this.onPlayerReady.bind(this);
    this.toggleSong = this.toggleSong.bind(this);
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
      // this.loadVideo();
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    let { songId } = this.state;
    let playlist = this.props.playlist;

    if (!songId && playlist.length) {
      this.setState({ songId: playlist[0].name.id });
      this.setState({ playlistIdx: 0 });
    }

    if (songId !== prevState.songId) {
      if (prevState.songId === null) {
        this.loadVideo(songId);
      }
    }
  };

  loadVideo = (songId) => {
    this.player = new window.YT.Player(`youtube-player-${songId}`, {
      videoId: songId,
      playerVars: {
        'autoplay': 1,
        'playsinline': 1,
        'origin': '//adventure-thon-test.herokuapp.com/'
      },
      events: {
        onReady: this.onPlayerReady,
      },
    });
    console.log('loadvideo this =>',this.player)
  };

  onPlayerReady = (event) => {
    event.target.pauseVideo();
    this.setState({ cElement: event });
    setTimeout(() => {
      this.setState({ isReady: true });
    }, 1000);
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

  toggleSong(dir) {
    this.setState({ isReady: false });

    let current = this.state.playlistIdx;
    let next;
    if (dir === "next") {
      next = current += 1;
    } else if (dir === "prev") {
      next = current -= 1;
    }
    let playlist = this.props.playlist;
    let newId = playlist[next].name.id;

    this.player.cueVideoById(newId);
    this.setState({ playlistIdx: next });
    this.setState({ songId: newId });
    this.setState({ isPaused: true });
    setTimeout(() => {
      this.setState({ isReady: true });
    }, 1500);
  }

  render = () => {

    const { songId } = this.state;
    return (
      <div>
        <div>
          <Controls
            isReady={this.state.isReady}
            isPaused={this.state.isPaused}
            togglePause={this.togglePause}
            toggleSong={this.toggleSong}
            playlist={this.props.playlist}
            songId={songId}
            playlistIdx={this.state.playlistIdx}
          />
        </div>
        <div>
          {/* <div id={`youtube-player-${songId}`} className="hide" /> */}
          {/* <div id={`youtube-player-${songId}`} /> */}
        </div>

        <div style={{ position: "absolute", top: "-9999px", left: "-9999px" }}>
          <div id={`youtube-player-${songId}`} />
        </div>
      </div>
    );
  };
}

const mapState = (state) => {
  return {
    inventory: state.inventory,
    playlist: state.playlist,
  };
};

export default connect(mapState)(Player);
