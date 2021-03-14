import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, addSingle } from "../store/";
import history from "../history";

export function Item(props) {
  const dispatch = useDispatch();
  const [newItem, setNewItem] = useState(false);
  const [restricted, setRestricted] = useState(false);
  const inventory = useSelector((state) => state.inventory);
  const room = props.room;
  const togglePlayer = props.togglePlayer;

  const onClick = () => {
    setNewItem(false);
  };

  const restrictedOnClick = () => {
    console.log("restricted on click");
    setNewItem(false);
    setRestricted(false);
    history.go(-1);
  };

  if (room.restrictions) {
    if (!restricted && !(room.restrictions.item in inventory)) {
      setRestricted(true);
    } else if (room.restrictions.item in inventory) {
      if(restricted) {
        setRestricted(false)
      }

      if( room.item.id) {
      let id = room.item.id;

      if (!(id in inventory)) {
        let item = {};
        item[id] = room.item;

        dispatch(addItem(item));
        if (item[id].type === "single") {
          dispatch(addSingle(item[id]));
        }
        setNewItem(true);
      }
    }
  } }else {
    if (room.item.id) {
      let id = room.item.id;

      if (!(id in inventory)) {
        let item = {};
        item[id] = room.item;

        dispatch(addItem(item));
        if (item[id].type === "single") {
          dispatch(addSingle(item[id]));
        }
        setNewItem(true);

        if (id === 1) {
          dispatch(togglePlayer());
        }
      }
    }
  }

  return (
    <>
      <div className={newItem ? "nes-container" : "hide"} id="new-item-alert">
        <p>
          {room.restrictions && room.restrictions.yesMessage}
          You found a{" "}
          {room.item.type === "single"
            ? `new CD single: ${room.item.name.name}`
            : room.item.name}
          !
        </p>
        <button type="button" className="nes-btn" onClick={onClick}>
          Okay!
        </button>
      </div>

      {restricted && room.restrictions ? (
        <div className="nes-container" id="restricted">
          <p>{room.restrictions.noMessage}</p>
          <button className="nes-btn is-disabled" onClick={restrictedOnClick}>
            Okay.
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
