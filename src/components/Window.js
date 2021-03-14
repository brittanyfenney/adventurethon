import React from "react";
import { Link } from "react-router-dom"
import "98.css";
import "../index.css";

export function Window() {



  return (
    <div>
    <div className="main-window" id="hello">
      <p>Hello. Are you new here?</p>
      <div>
      <Link to="/signup"><button>Yes.</button></Link>
      <Link to="/signin"><button>No.</button></Link>
      </div>
    </div>



    </div>
  );
}

