import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { useSelector } from "react-redux";
import { Item } from './Item'

export function Room(props) {
  const room = useSelector((state) => state.rooms[props.match.params.id]);
  const togglePlayer = props.togglePlayer


  if (room.name) {
    return (
      <div className="nes-container is-dark with-title" id="room-window">
        <div>

        <p>You are in the {room.name}.</p>
        <p>What would you like to do?</p>

        <div className="direction-buttons">
          {room.directions.east && (
            <Link to={`/room/${room.directions.east}`}>
              <button className="nes-btn">Go East</button><br />
            </Link>
          )}
          {room.directions.west && (
            <Link to={`/room/${room.directions.west}`}>
              <button className="nes-btn">Go West</button><br />
            </Link>
          )}
          {room.directions.north && (
            <Link to={`/room/${room.directions.north}`}>
              <button className="nes-btn">Go North</button><br />
            </Link>
          )}
          {room.directions.south && (
            <Link to={`/room/${room.directions.south}`}>
              <button className="nes-btn">Go South</button><br />
            </Link>
          )}
          {room.directions.upstairs && (
            <Link to={`/room/${room.directions.upstairs}`}>
              <button className="nes-btn">Go Upstairs</button><br />
            </Link>
          )}
          {room.directions.downstairs && (
            <Link to={`/room/${room.directions.downstairs}`}>
              <button className="nes-btn">Go Downstairs</button><br />
            </Link>
          )}
        </div>
        </div>

        <Item room={room} togglePlayer={togglePlayer} />

      </div>
    );
  } else {
    return <p>Are you lost?</p>;
  }
}
