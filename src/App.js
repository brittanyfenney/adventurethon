import "98.css";
import "./index.css";
import Routes from "./routes";
import { Player } from "./components";
import { Backpack } from "./components";
import { togglePlayer } from "./store/";

function App() {
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


    </div>
  );
}

export default App;
