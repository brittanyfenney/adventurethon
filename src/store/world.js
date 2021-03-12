// ITEM CONSTRUCTOR

class Item {
  constructor(id, name, desc) {
    this.id = id;
    this.name = name;
    this.desc = desc
  }
}

// ITEMS

let discman = new Item(1,"Discman", "A portable CD player. Cool!")

// ALL ITEMS ARRAY

const allItems = {
  1: discman
}

export function items(state = allItems, action) {
  switch (action.type) {
  default:
    return state
  }
}

//////////////////

// ROOM CONSTRUCTOR

class Room {
  constructor(id, name, directions, item) {
    this.id = id
    this.name = name;
    this.directions = directions
    this.item = item || {}
  }
}

// ROOMS

let kitchen = new Room(1, "Kitchen", {west: 2})
let livingRoom = new Room(2, "Living Room", {east: 1}, discman)


// ALL ROOMS ARRAY

const allRooms = {
  1: kitchen,
  2: livingRoom
}


// ROOM REDUCER
export function rooms(state = allRooms, action) {
  switch (action.type) {
  default:
    return state
  }
}
