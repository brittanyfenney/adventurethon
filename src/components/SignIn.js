import React from "react";
import { Link } from "react-router-dom";
import "nes.css/css/nes.min.css";

export function SignIn() {
  return (
    <div >
      <div className="cat">
        <i className="nes-octocat animate"></i>
      </div>
      <Link to="/"><div id="back"><button className="nes-btn">Back</button></div></Link>

    </div>
  );
}
