// import React, { useState, useEffect } from "react";
import React from "react";
import YouTube from "react-youtube";

export class Player extends React.Component {
  constructor() {
    super();
    this.onReady = this.onReady.bind(this);
  }

  onReady(event) {
    console.log("_onReady");
    // cElement = event;
    // toggleReady();
  }

  render() {
    console.log("PLAYER FUNCTION");
    return (
      <div>
        <button type="button">Play</button>

        <button type="button">Next</button>
        <YouTube videoId={"qq09UkPRdFY"} onReady={this.onReady} />
        <button type="button">Another button</button>
      </div>
    );
  }
}
