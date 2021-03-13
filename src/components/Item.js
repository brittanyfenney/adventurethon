import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../store/";

export function Item(props) {
  const dispatch = useDispatch();
  const [newItem, setNewItem] = useState(false);
  const inventory = useSelector((state) => state.inventory);

  const room = props.room;
  const togglePlayer = props.togglePlayer;

  const onClick = () => {
    setNewItem(false);
  }

  if (room.item.id) {
    let id = room.item.id;

    if (!(id in inventory)) {
      let item = {};
      item[id] = room.item;
      // if (item.type === 'single') {

        dispatch(addItem(item));
      // }
      setNewItem(true);

      if (id === 1) {
        dispatch(togglePlayer());
      }
    } else if (newItem === true) {
      // setNewItem(false);
    }
  }
  return (
    <div className={newItem ? "nes-container" : "hide"} id="new-item-alert">
      <p>You found a {(room.item.type === 'single') ? `new single: ${room.item.name.name}` : room.item.name}!</p>
      <button type="button" className="nes-btn" onClick={onClick}>Okay!</button>
    </div>
  );
}
