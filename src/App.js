import React, { useState } from 'react'
import Routes from "./routes";
import { Player } from "./components";
import { Backpack } from "./components";
import { togglePlayer } from "./store/";
import "98.css";
import "nes.css/css/nes.min.css";
import "./index.css";

function App() {

  const [installMessage, setInstallMessage] = useState(false)
  const [installDismissed, setInstallDismissed] = useState(false)


  const isIos = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    console.log("userAgent", userAgent)
    return /iphone|ipad|ipod/.test( userAgent );

  }
  // Detects if device is in standalone mode
  const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);


  console.log(installMessage)


  // Checks if should display install popup notification:
  if (isIos() && !isInStandaloneMode()) {
    if (!installMessage ){
    setInstallMessage(true)}
  }
  console.log(installMessage)

  const onClick = () => {
    setInstallDismissed(true)
    setInstallMessage(false)

  }

  return (
    <div className="App">
      <div className="window" id="app-window">
        <div className="title-bar">
          <div className="title-bar-text">Adventurethon</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" />
          </div>
        </div>

        <div className="window-body" id="routes-container">
          <Routes togglePlayer={togglePlayer} />
        </div>
      </div>

      <div id="backpack-container">
        <Backpack />
      </div>

      <div id="player-container">
        <Player />
      </div>

      <div className={(installMessage && !installDismissed) ? "message" : "hide"}>

      <div className="nes-balloon from-left" id="install" ><p>Open the share menu and click "Add to Home Screen" to install this app.</p>
      <button className="nes-btn is-primary" onClick={onClick}>Got it!</button></div>

        <div><i class="nes-kirby"></i></div>
      </div>


      {/* <div className={(installMessage && !installDismissed) ? "nes-balloon from-left" : "hide"} id={(installMessage && !installDismissed) ? "install" : ""}><p>Open the share menu and click "Add to Home Screen" to install this app.</p>
      <button className="nes-btn is-primary" onClick={onClick}>Got it!</button></div> */}
{/*
      {installMessage && <div className="nes-balloon from-left" id="install"><p>Open the share menu and click "Add to Home Screen" to install this app.</p>
      <button className="nes-btn is-primary" onClick={onClick}>Got it!</button></div>} */}
    </div>
  );
}

export default App;
