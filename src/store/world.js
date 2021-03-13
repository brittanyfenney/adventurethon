// ITEM CONSTRUCTOR

class Item {
  constructor(id, name, desc, type) {
    this.id = id;
    this.name = name;
    this.desc = desc
    this.type = type
  }
}

// ITEMS
let discman = new Item(1,"Discman", "A portable CD player. Cool!", "technology")

// SINGLES
let fantasy = new Item(50, {name: "Fantasy", artist: "Mariah Carey", id: "qq09UkPRdFY"}, "Welcome to the fantasy...", "single")
let noScrubs = new Item(51, {name: "No Scrubs", artist: "TLC", id: "FrLequ6dUdM"}, "Scrub is a guy that can't get not love from me.", "single")



// ALL ITEMS

const allItems = {
  1: discman,

  50: fantasy,
  51: noScrubs
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
let livingRoom = new Room(2, "Living Room", {east: 1, south: 3}, discman)
let bedroom = new Room(3, "Bedroom", {north: 2, south: 4}, fantasy)
let hall = new Room(4, "Hall", {north: 3}, noScrubs)

// ALL ROOMS

const allRooms = {
  1: kitchen,
  2: livingRoom,
  3: bedroom,
  4: hall
}


// ROOM REDUCER
export function rooms(state = allRooms, action) {
  switch (action.type) {
  default:
    return state
  }
}
