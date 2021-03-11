import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";

var cElement = null;

function Pause(props) {
  console.log("Pause function");
  return (
    <button onClick={props.handleClick}>
      {props.isPaused ? "Play" : "Pause"}
    </button>
  );
}

function Video(props) {
  console.log('VIDEO FUNCTION')
  console.log("PROPS =>", props);
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  useEffect(() => {
    if (cElement) {
      props.isPaused
        ? cElement.target.pauseVideo()
        : cElement.target.playVideo();
    }
  }, [props.isPaused]);

  const _onReady = (event) => {
    console.log("_onReady");
    cElement = event;
    props.toggleReady()
    // event.target.playVideo();
  };

  const _onStateChange = (event) => {
    // event.target.pauseVideo()
    console.log("on state change");
  };
  return (
    <YouTube
      videoId={"qq09UkPRdFY"}
      opts={opts}
      onReady={_onReady}
      onStateChange={_onStateChange}
    />
  );
}

export function Player() {
  console.log('PLAYER FUNCTION')
  const [isPaused, setIsPaused] = useState(true);
  const [isReady, setIsReady] = useState(false);

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const toggleReady = () => {
    setIsReady(true);
  };

  return (
    <div className="Player">
      {isReady ? <Pause handleClick={togglePause} isPaused={isPaused} /> : <button type="button" disabled>Play</button>}
      <button type="button">Next</button>
      {/* <div id="hide-player" style={{position: "absolute", top: "-9999px", left: "-9999px"}}> */}
      {/* <Video isPaused={isPaused} toggleReady={toggleReady}/> */}
      <Video isPaused={isPaused}/>
      {/* </div> */}
    </div>
  );
}
