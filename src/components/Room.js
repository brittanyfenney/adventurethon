import React from "react";
import { Link } from "react-router-dom";
// import "98.css";
import "../index.css";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../store/";

export function Room(props) {
  const dispatch = useDispatch();
  const room = useSelector((state) => state.rooms[props.match.params.id]);
  const inventory = useSelector((state) => state.inventory);
  const togglePlayer = props.togglePlayer

  let foundNewItem = false
  console.log("Room props: ",props);
  console.log("Current Room: ",room);
  console.log("Current Inventory: ", inventory);

  if (room.item.id) {
    let id = room.item.id;
    if (!(room.item.id in inventory)) {
      console.log(`Adding ${room.item.name} to inventory!`);
      let item = {};
      item[id] = room.item;
      dispatch(addItem(item));
      alert(`You found a ${room.item.name}!`)

      if (id === 1) {
        dispatch(togglePlayer())
      }
    }
  }

  if (room.name) {
    return (
      <div className="room-window">
        <div>
        <p>You are in the {room.name}.</p>
        {foundNewItem && <p>You found a {room.item.name}.</p>}
        <p>What would you like to do?</p>
        <div className="items"></div>
        <div className="direction-buttons">
          {room.directions.east && (
            <Link to={`/room/${room.directions.east}`}>
              <button>Go East.</button>
            </Link>
          )}
          {room.directions.west && (
            <Link to={`/room/${room.directions.west}`}>
              <button>Go West.</button>
            </Link>
          )}
          {room.directions.north && (
            <Link to={`/room/${room.directions.north}`}>
              <button>Go North.</button>
            </Link>
          )}
          {room.directions.south && (
            <Link to={`/room/${room.directions.south}`}>
              <button>Go South.</button>
            </Link>
          )}
        </div>
        </div>
        {/* <div className="toggle-bp">
          <button>Open Backpack</button>
        </div> */}
      </div>
    );
  } else {
    return <p>Are you lost?</p>;
  }
}
