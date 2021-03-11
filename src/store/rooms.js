// import axios from 'axios'

// ACTION TYPES

// const UPDATED_USER = 'UPDATED_USER'


// ACTION CREATORS

// export const updatedUser = (info) => ({type: UPDATED_USER, info })


// THUNK CREATORS

// export const updateUser = () => async dispatch => {
//   try {
//     const { data } = await axios.get(url)
//     dispatch(gotPlaylist(data))
//   } catch (error) {

//   }
// }

class Room {
  constructor(id, name, directions) {
    this.id = id
    this.name = name;
    this.directions = directions
    // this.east = east || null
    // this.west = west || null
    // this.north = north || null
    // this.south = south || null
  }
}

let kitchen = new Room(1, "Kitchen", {west: 2})
let livingRoom = new Room(2, "Living Room", {east: 1})


const allRooms = {
  1: kitchen,
  2: livingRoom
}


// REDUCER
export default function rooms(state = allRooms, action) {
  switch (action.type) {
  default:
    return state
  }
}
