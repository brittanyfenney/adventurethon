import React from "react";
import { connect } from "react-redux";
import { Controls } from "./index";
import "98.css";

class Player extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      id: null,
      isReady: false,
      isPaused: true,
      cElement: null,
      singles: [],
      currentSong: null
    };
    this.togglePause = this.togglePause.bind(this);
    this.onPlayerReady = this.onPlayerReady.bind(this);
    this.toggleSong = this.toggleSong.bind(this)
  }

  componentDidMount = () => {
    console.log("PLAYER MOUNTED, PROPS =>", this.props);
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
    console.log("COMPONENT UPDATED")
    let { id, singles } = this.state
    let inventory = this.props.inventory

    if (inventory !== prevProps.inventory) {
      let singlesArray = [];
      for (const [key, value] of Object.entries(inventory)) {
        if (value.type === "single") singlesArray.push(inventory[key]);
      }
      if (singlesArray.length > singles.length) {
        this.setState({ singles: singlesArray });
      }
    }

    if(!id && singles.length) {
      this.setState({id: singles[0].name.id})
      this.setState({currentSong: 0})
    }

    if(id !== prevState.id) {
      console.log(`OLD ID => ${prevState.id}, NEW ID =>${id}`)
      if (prevState.id === null) {
      this.loadVideo(id);
      }

    }
  };

  loadVideo = (id) => {
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
    console.log('player ready')
    event.target.pauseVideo();
    setTimeout(() => {this.setState({ isReady: true })},1000)
    this.setState({ cElement: event });
    console.log('PLAYER READY, SONG ID =>', this.state.id)
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
    this.setState({isReady: false})

    let current = this.state.currentSong
    let next
    if (dir === 'next') {
      next = current += 1
    } else if (dir === 'prev') {
      next = current -=1
    }
    let singles = this.state.singles
    let newId = singles[next].name.id

    this.player.cueVideoById(newId)
    this.setState({ currentSong: next });
    this.setState({ id: newId })
    this.setState({isPaused: true})
    setTimeout(() => {this.setState({ isReady: true })},3000)

  }

  render = () => {
    console.log('PLAYER RENDERED, STATE =>', this.state)
    const { id } = this.state;
    return (
      <div>
        <Controls
          isReady={this.state.isReady}
          isPaused={this.state.isPaused}
          togglePause={this.togglePause}
          toggleSong={this.toggleSong}
          singles={this.state.singles}
          id={id}
          currentSong={this.state.currentSong}
        />

        <div>
          <div id={`youtube-player-${id}`} className="hide" />
          {/* <div id={`youtube-player-${id}`} /> */}
        </div>

        {/* <div style={{ position: "absolute", top: "-9999px", left: "-9999px" }}>
          <div id={`youtube-player-${id}`} />
        </div> */}
      </div>
    );
  };
}

const mapState = (state) => {
  return {
    inventory: state.inventory,
  };
};

export default connect(mapState)(Player);
