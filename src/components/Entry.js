import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../store";
import "../index.css";
import "nes.css/css/nes.min.css";

export function Entry() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const backpack = useSelector((state) => state.inventory.backpack);

  if (!backpack) {
    const item = {};
    item.backpack = true;
    dispatch(addItem(item));
  }

  return (
    <div className="nes-container is-dark with-title" id="entry-window">
      <p className="title">Welcome, {user.name}. </p>
      <p>You are in an empty room.</p>
      <p>You are carrying a backpack.</p>
      <p>There is a door in front of you. What would you like to do?</p>
      <Link to="/room/1">
        <button className="nes-btn">Go through the door.</button>
      </Link>
      <Link to="/">
        <button className="nes-btn">Leave</button>
      </Link>
    </div>
  );
}
