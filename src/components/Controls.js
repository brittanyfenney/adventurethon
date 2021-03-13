import React from "react";
import { useSelector } from "react-redux";

export function Controls(props) {
  const hasPlayer = useSelector((state) => state.player);
  const singles = props.singles;
  const currentSong = props.currentSong;

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

      <div className="window-body">
        <p>
          {props.id
            ? `Current song is ${singles[currentSong].name.name} by ${singles[currentSong].name.artist}`
            : `Howdy! You don't have any songs right now.`}
        </p>

        {currentSong > 0 ? (
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


        {currentSong < (singles.length -1) ? (
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
  );
}
