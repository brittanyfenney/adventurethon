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
let key = new Item(2,"Key", "What does it open?", "tool")
let flashlight = new Item(1,"Flashlight", "Are you afraid of the dark?", "tool")

// SINGLES
let fantasy = new Item(50, {name: "Fantasy", artist: "Mariah Carey", id: "qq09UkPRdFY"}, "Welcome to the fantasy...", "single")
let noScrubs = new Item(51, {name: "No Scrubs", artist: "TLC", id: "FrLequ6dUdM"}, "Scrub is a guy that can't get not love from me.", "single")



// ALL ITEMS

const allItems = {
  1: discman,
  2: key,
  3: flashlight,


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

let hallOne = new Room(1, "hall", {west: 2, east: 3, south: 4})
let bedroom = new Room(2, "Bedroom", {east: 1}, discman)
let kitchen = new Room(3, "Kitchen", {west: 1, south: 6}, noScrubs)
let hallTwo = new Room(4, "hall", {west: 5, east: 6, north: 1, south: 7})
let guestBedroom = new Room(5, "Guest Bedroom", {east: 4}, key)
let diningRoom = new Room(6, "Dining Room", {west: 4, south: 7}, fantasy)
let livingRoom = new Room(7, "Living Room", {north: 4}, flashlight)



// ALL ROOMS

const allRooms = {
  1: hallOne,
  2: bedroom,
  3: kitchen,
  4: hallTwo,
  5: guestBedroom,
  6: diningRoom,
  7: livingRoom
}


// ROOM REDUCER
export function rooms(state = allRooms, action) {
  switch (action.type) {
  default:
    return state
  }
}
