import React from 'react'
import { useSelector } from 'react-redux'

export function Controls(props) {
  const hasPlayer = useSelector(state => state.player)

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
        <p>Howdy</p>
        {props.isReady ? (
          <button type="button" onClick={props.togglePause}>
            {props.isPaused ? "Play" : "Pause"}
          </button>
        ) : (
          <button disabled>Play</button>
        )}
        <button>Next</button>
      </div>

   </div>

  )
        }
