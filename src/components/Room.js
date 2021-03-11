import React from "react";
import { Link } from "react-router-dom"
import "98.css";
import "../index.css";
import {useSelector} from 'react-redux'

export function Room(props) {
  // const user = useSelector(state => state.user)
  console.log('PROPS =>', props)
  console.log('PARAMS =>', props.match.params)
  const room = useSelector(state =>
    state.rooms[props.match.params.id]
    )
    console.log(room)

if (room.name) {
  return (

    <div className="room-window">
      <p>You are in the {room.name}.</p>
      <p>There are four doors in the room. What would you like to do?</p>
      <div className="items"></div>
      <div className="direction-buttons">
      {room.directions.east && <Link to={`/room/${room.directions.east}`}><button>Go East.</button></Link>}
      {room.directions.west && <Link to={`/room/${room.directions.west}`}><button>Go  West.</button></Link>}
      {room.directions.north && <Link to={`/room/${room.directions.north}`}><button>Go North.</button></Link>}
      {room.directions.south && <Link to={`/room/${room.directions.south}`}><button>Go South.</button></Link>}
      </div>

    </div>
  )} else {
    return (<p>Are you lost?</p>)
  }

}

