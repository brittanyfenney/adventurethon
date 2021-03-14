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
let fantasy = new Item(50, {name: "Fantasy", artist: "Mariah Carey", id: "UjAOYDqGcaE"}, "Welcome to the fantasy...", "single")
let noScrubs = new Item(51, {name: "No Scrubs", artist: "TLC", id: "y4pjKc0ZRiE"}, "Scrub is a guy that can't get not love from me.", "single")



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
  constructor(id, name, directions, restrictions, item) {
    this.id = id
    this.name = name;
    this.directions = directions
    this.restrictions = restrictions || null
    this.item = item || {}

  }
}

// ROOMS

let hallOne = new Room(1, "hall", {west: 2, east: 3, south: 4})
let bedroom = new Room(2, "Bedroom", {east: 1, west: 8}, null, discman)
let kitchen = new Room(3, "Kitchen", {west: 1, south: 6, east: 10}, null, noScrubs)
let hallTwo = new Room(4, "hall", {west: 5, east: 6, north: 1, south: 7})
let guestBedroom = new Room(5, "Guest Bedroom", {east: 4, west: 9}, null, key)
let diningRoom = new Room(6, "Dining Room", {west: 4, north: 3}, null, fantasy)
let livingRoom = new Room(7, "Living Room", {north: 4, south: 11})
let closetOne = new Room(8, "bedroom closet", {east: 2}, {item: 3, message: "It's too dark to see anything."})
let closetTwo = new Room(9, "guest bedroom closet", {east: 5}, {item: 3, message: "It's too dark to see anything."})
let pantry = new Room(10, "Pantry", {west: 3}, {item: 3, noMessage: "It's too dark to see anything.", yesMessage: "You turn on the flashlight."})
let mudroom = new Room(11, "Mudroom", {north: 7, south: 12})
let backyard = new Room(12, "backyard", {north: 11, east: 13})
let neighborYard = new Room(13, "neighbor's yard", {west: 12, south: 14, north: 16})
let forest = new Room(14, "the forest", {north: 13, south: 15})
let forestTwo = new Room(15, "the forest still..", {north: 14})
let sunroom = new Room(16, "the neighbor's Sunroom", {south: 13, east: 21, north: 17}, {item:2, noMessage:"The door is locked. What are you, a burglar?", yesMessage: "You have a key! You unlock the door."})
let neighborKitchen = new Room(17, "the neighbor's Kitchen", {north: 18, south: 16, east: 22})
let frontHall = new Room(18, "the neighbor's front hall", {west: 19, south: 17})
let hallCloset = new Room(19, "the neighbor's hall closet", {east: 18}, {item: 3, noMessage: "It's too dark to see anything.", yesMessage: "You turn on the flashlight."})
let study = new Room(20, "the neighbor's Study", {north: 21})
let den = new Room(21, "the neighbor's Den", {south: 20, north: 22, west: 16})
let denTwo = new Room(22, "the neighbor's Den", {west: 17, south: 21, upstairs: 23},)
let upstairsHall = new Room(23, "the neighbor's upstairs hall", {north: 27, east: 24, downstairs: 22})
let upstairsHallTwo = new Room(24, "the neighbor's upstairs hall", {west: 23, south: 26, north: 28, east: 25})
let upstairsHallThree = new Room(25, "the neighbor's upstairs hall", {west: 24, upstairs: 29})
let neighborBedroom = new Room(26, "the neighbor's Bedroom", {north: 24})
let neighborGuestBedroom = new Room(27, "the neighbor's Guest Bedroom", {south: 23})
let neighborBathroom = new Room(28, "the neighbor's Bathroom", {south: 24})
let attic = new Room(29, "the neighbor's Attic", {west: 30, downstairs: 25})
let hiddenRoom = new Room(30, "the neighbor's hidden room", {east: 29})



// ALL ROOMS

const allRooms = {
  1: hallOne,
  2: bedroom,
  3: kitchen,
  4: hallTwo,
  5: guestBedroom,
  6: diningRoom,
  7: livingRoom,
  8: closetOne,
  9: closetTwo,
  10: pantry,
  11: mudroom,
  12: backyard,
  13: neighborYard,
  14: forest,
  15: forestTwo,
  16: sunroom,
  17: neighborKitchen,
  18: frontHall,
  19: hallCloset,
  20: study,
  21: den,
  22: denTwo,
  23: upstairsHall,
  24: upstairsHallTwo,
  25: upstairsHallThree,
  26: neighborBedroom,
  27: neighborGuestBedroom,
  28: neighborBathroom,
  29: attic,
  30: hiddenRoom
}


// ROOM REDUCER
export function rooms(state = allRooms, action) {
  switch (action.type) {
  default:
    return state
  }
}
