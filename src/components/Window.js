import React from "react";
import { Link } from "react-router-dom"
import "98.css";
import "../index.css";

export function Window() {
  return (
    <div class-name="main-window">
      <p>Hello. Are you new here?</p>
      <Link to="/signup"><button>Yes.</button></Link>
      <Link to="/youtube"><button>No.</button></Link>
    </div>
  );
}

export function SignUp() {
  return (
    <div class-name="signup-window">
      <p>What's your name?</p>
      <input type="text"></input>
      <button>Submit</button>
    </div>
  );
}
