import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, addSingle } from "../store/";

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

      dispatch(addItem(item));
      if (item[id].type === 'single') {
        dispatch(addSingle(item[id]));
      }
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
      <p>You found a {(room.item.type === 'single') ? `new CD single: ${room.item.name.name}` : room.item.name}!</p>
      <button type="button" className="nes-btn" onClick={onClick}>Okay!</button>
    </div>
  );
}
