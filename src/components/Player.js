// import React, { useState, useEffect } from "react";
// import YouTube from "react-youtube";

export function Player() {
  console.log("PLAYER FUNCTION");

  // const _onReady = (event) => {
  //   console.log("_onReady");
  //   // cElement = event;
  //   // toggleReady();
  // };

  return (
    <div>

        <button type="button">
          Play
        </button>

      <button type="button">Next</button>
      <iframe title ="player" src="https://www.youtube.com/embed/qq09UkPRdFY?autoplay=1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      {/* <YouTube videoId={"qq09UkPRdFY"} onReady={_onReady}/> */}
    </div>
  );
}
