// import React, { useState, useEffect } from "react";
import React from 'react'
import YouTube from "react-youtube";

export class Player extends React.Component {
  render() {
  console.log("PLAYER FUNCTION");


  return (
    <div>

        <button type="button">
          Play
        </button>

      <button type="button">Next</button>
      <YouTube videoId={"qq09UkPRdFY"}/>
      <button type="button">Another button</button>
    </div>
  )
  }
}
