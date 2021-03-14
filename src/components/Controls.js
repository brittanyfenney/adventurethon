import React from "react";
import { useSelector } from "react-redux";

export function Controls(props) {
  const hasPlayer = useSelector((state) => state.player);
  const playlist = props.playlist;
  const playlistIdx = props.playlistIdx;

  return (
    <div className={hasPlayer ? "window" : "hide"}>
      <div className="title-bar">
        <div className="title-bar-text">Discman</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" />
          <button aria-label="Maximize" />
          <button aria-label="Close" />
        </div>
      </div>

      <div className="window-body" id="control-window">
        <p>
          {props.songId
            ? `${playlist[playlistIdx].name.name} by ${playlist[playlistIdx].name.artist} `
            : `You don't have any songs right now.`}
            {/* {(props.songId && !props.isReady) && ".....Loading....."} */}
        </p>


        <p>{(props.songId && !props.isReady) ? ".....Loading....." : "Ready!"}</p>

<div>
        {playlistIdx > 0 ? (
          <button type="button" onClick={() => props.toggleSong("prev")}>
            Prev
          </button>
        ) : (
          <button type="button" disabled>
            Prev
          </button>
        )}

        {props.isReady ? (
          <button type="button" onClick={props.togglePause}>
            {props.isPaused ? "Play" : "Pause"}
          </button>
        ) : (
          <button disabled>Play</button>
        )}


        {playlistIdx < (playlist.length -1) ? (
        <button type="button" onClick={() => props.toggleSong("next")}>
          Next
        </button>
          ) : (
            <button type="button" disabled>
              Next
            </button>
          )}
          </div>
      </div>
    </div>
  );
}
