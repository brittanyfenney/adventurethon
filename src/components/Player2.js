import React from "react";
import { connect } from "react-redux";
import { getPlaylist } from "../store";
import YouTube from "react-youtube";
import { playVideo } from "react-youtube"

class Player extends React.Component {
  constructor() {
    super();
    this.state = {
      playerReady: false,
      play: false,
    };
    this.onReady = this.onReady.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    console.log("YOUTUBE COMPONENT MOUNTED");
    console.log("STATE =>", this.state);
    console.log("PROPS =>", this.props);
    this.props.getPlaylist();
  }

  componentDidUpdate() {
    console.log("YOUTUBE COMPONENT UPDATED");
    console.log("STATE =>", this.state);
    console.log("PROPS =>", this.props);
  }

  const _onReady = event => {
    console.log("_onReady");
    cElement = event;
    // event.target.playVideo();
  };

  // const _onReady = (event) {
  //   console.log("in on ready");
  //   event.target.pauseVideo();
  //   this.setState({ playerReady: true });
  //   // if (action === "play") {
  //   //   event.target.playVideo();
  //   // }
  }

  clickHandler() {
    console.log("clicked!");
    this.setState({ play: true });
    playVideo()
  }

  render() {
    console.log('YOUTUBE COMPONENT RENDERED')
    const playlist = this.props.myPlaylist.items;
    const opts = {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
      },
    };
    if (playlist && playlist.length) {
      return (
        <div>
          <p>playlist found!</p>
          {/* {this.state.playerReady && <button type="button" onClick={this.clickHandler}>Play</button>} */}
          <button type="button" onClick={this.clickHandler}>
            Play
          </button>
          <button type="button">Pause</button>
          <button type="button">Next</button>

          {/* <div id="player" style={{position: "absolute", top: "-9999px", left: "-9999px"}}> */}
          {/* <iframe title ="player" src="https://www.youtube.com/embed/qq09UkPRdFY?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

          {this.state.playerReady && (
            <YouTube
              videoId={"qq09UkPRdFY"}
              opts={opts}
              onReady={_onReady}
            />
          )}

          {/* </div> */}
        </div>
      );
    } else {
      return <h1>no playlist</h1>;
    }
  }
}

// CONTAINER

const mapState = (state) => {
  return {
    myPlaylist: state.playlist,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getPlaylist() {
      dispatch(getPlaylist());
    },
  };
};

export default connect(mapState, mapDispatch)(Player);
