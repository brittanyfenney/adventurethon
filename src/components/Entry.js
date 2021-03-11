import React from "react";
import { Link } from "react-router-dom"
import "98.css";
import "../index.css";
import {useSelector} from 'react-redux'

export function Entry() {
  const user = useSelector(state => state.user)
  return (

    <div className="entry-window">
      <p>Welcome, {user.name}. You are in an empty room.</p>
      <p>You are carrying a backpack.</p>
      <p>There is a door in front of you. What would you like to do?</p>
      <Link to="/room/1"><button>Go through the door.</button></Link>
      <Link to="/"><button>Leave</button></Link>
    </div>
  );
}

