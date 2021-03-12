import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { useSelector } from "react-redux";
import { Item } from './Item'

export function Room(props) {
  const room = useSelector((state) => state.rooms[props.match.params.id]);
  const togglePlayer = props.togglePlayer

  // console.log("Room props: ",props);
  // console.log("Current Room: ",room);

  if (room.name) {
    return (
      <div className="nes-container is-dark with-title" id="room-window">
        <div>

        <p>You are in the {room.name}.</p>
        <p>What would you like to do?</p>

        <div className="direction-buttons">
          {room.directions.east && (
            <Link to={`/room/${room.directions.east}`}>
              <button class="nes-btn">Go East.</button>
            </Link>
          )}
          {room.directions.west && (
            <Link to={`/room/${room.directions.west}`}>
              <button class="nes-btn">Go West.</button>
            </Link>
          )}
          {room.directions.north && (
            <Link to={`/room/${room.directions.north}`}>
              <button class="nes-btn">Go North.</button>
            </Link>
          )}
          {room.directions.south && (
            <Link to={`/room/${room.directions.south}`}>
              <button class="nes-btn">Go South.</button>
            </Link>
          )}
        </div>
        </div>
        {/* <div className="toggle-bp">
          <button>Open Backpack</button>
        </div> */}
        <Item room={room} togglePlayer={togglePlayer} />

      </div>
    );
  } else {
    return <p>Are you lost?</p>;
  }
}
