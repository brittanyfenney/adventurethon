import React from "react";
import { Link } from "react-router-dom"
// import "98.css";
import "../index.css";
import {useSelector} from 'react-redux'
import "nes.css/css/nes.min.css"

export function Entry() {
  const user = useSelector(state => state.user)
  return (

    <div class="nes-container is-dark with-title" id="entry-window">
      <p class="title">Welcome, {user.name}. </p>
      <p>You are in an empty room.</p>
      <p>You are carrying a backpack.</p>
      <p>There is a door in front of you. What would you like to do?</p>
      <Link to="/room/1"><button class="nes-btn">Go through the door.</button></Link>
      <Link to="/"><button class="nes-btn">Leave</button></Link>


    </div>
  );
}

