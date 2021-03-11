// import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";

export function Player() {
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
  );
}
