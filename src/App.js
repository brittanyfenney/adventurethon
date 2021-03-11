import "98.css"
import "./index.css"
// import { Window }  from './components'
import Routes from './routes'

function App() {
  return (
    <div className="App">
      <div className="window">
      <div className="title-bar">
        <div className="title-bar-text">Adventurethon</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" />
          <button aria-label="Maximize" />
          <button aria-label="Close" />
        </div>
      </div>

      <div className="window-body">
        {/* <p style={{ textAlign: "center" }}>Current count: 5</p>
        <div className="field-row" style={{ justifyContent: "center" }}>
          <button>+</button>
          <button>-</button>
          <button>0</button> */}
          {/* <Window /> */}
          <Routes />
        {/* </div> */}
      </div>
    </div>

    </div>
  );
}

export default App
