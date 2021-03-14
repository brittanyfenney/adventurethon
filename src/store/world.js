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
let flashlight = new Item(3,"Flashlight", "Are you afraid of the dark?", "tool")
let threeDeeGlasses = new Item(4, "pair of 3D glasses", "You can see in 3D now!", "tool")
let trophy = new Item(5, "beautiful, gold-finish, junior soccer league trophy", "Prettttty!", "award")

// SINGLES
let fantasy = new Item(50, {name: "Fantasy", artist: "Mariah Carey", id: "UjAOYDqGcaE"}, "Welcome to the fantasy...", "single")
let noScrubs = new Item(51, {name: "No Scrubs", artist: "TLC", id: "y4pjKc0ZRiE"}, "Scrub is a guy that can't get not love from me.", "single")
let oneMoreTime = new Item(52, {name: "...Baby One More Time", artist: "Britney Spears", id: "BCMzBH0or4I"}, "Oh baby, baby, how was I supposed to know, That something wasn't right here?", "single")
let wannabe = new Item(53, {name: "Wannabe", artist: "The Spice Girls", id: "fw-QRyQcFH8"}, "I'll tell you what I want, what I really, really want", "single")
let nothingCompares = new Item(54, {name: "Nothing Compares 2 U", artist: "Sinead O'Connor", id: "XrnTTuqwIC0"}, "t's been seven hours and 15 days, Since you took your love away", "single")
let genie = new Item(55, {name: "Genie in a Bottle", artist: "Christina Aguilera", id: "Iu7Ixskp0dY"}, "I'm a genie in a bottle, baby - Come, come, come in and let me out", "single")
let thatThing = new Item(56, {name: "Doo Wop (That Thing)", artist: "Lauryn Hill", id:"G5zirRc34Xc"}, "That thing, that thing, that thing", "single")
let barbie = new Item(57, {name: "Barbie Girl", artist: "Aqua", id: "v35fWf1CWFQ"}, "Life's fantastic, when you're plastic!", "single")
let speak = new Item(58, {name: "Don't Speak", artist: "No Doubt", id: "Qbb7r1XgMTU"}, "Don't speak, I know just what you're sayin'", "single")
let bidi = new Item(59, {name: "Bidi Bidi Bom Bom", artist: "Selena", id:"aP9mKAZUnhI"}, "Bidi bidi bom bom (bidi bidi bom bom)", "single")




// ALL ITEMS

const allItems = {
  1: discman,
  2: key,
  3: flashlight,
  4: threeDeeGlasses,
  5: trophy,


  50: fantasy,
  51: noScrubs,
  52: oneMoreTime,
  53: wannabe,
  54: nothingCompares,
  55: genie,
  56: thatThing,
  57: barbie,
  58: speak,
  59: bidi

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
let closetOne = new Room(8, "bedroom closet", {east: 2}, {item: 3, noMessage: "It's too dark to see anything.", yesMessage: "You turn on the flashlight."}, threeDeeGlasses)
let closetTwo = new Room(9, "guest bedroom closet", {east: 5}, {item: 3, noMessage: "It's too dark to see anything.", yesMessage: "You turn on the flashlight."}, nothingCompares)
let pantry = new Room(10, "Pantry", {west: 3}, {item: 3, noMessage: "It's too dark to see anything.", yesMessage: "You turn on the flashlight."}, genie)
let mudroom = new Room(11, "Mudroom", {north: 7, south: 12}, null, flashlight)
let backyard = new Room(12, "backyard", {north: 11, east: 13}, null , wannabe)
let neighborYard = new Room(13, "neighbor's yard", {west: 12, south: 14, north: 16})
let forest = new Room(14, "the forest", {north: 13, south: 15})
let forestTwo = new Room(15, "the forest still..", {north: 14}, null, speak)
let sunroom = new Room(16, "the neighbor's Sunroom", {south: 13, east: 21, north: 17}, {item: 2, noMessage:"The door is locked. What are you, a burglar?", yesMessage: "You have a key! You unlock the door."})
let neighborKitchen = new Room(17, "the neighbor's Kitchen", {north: 18, south: 16, east: 22})
let frontHall = new Room(18, "the neighbor's front hall", {west: 19, south: 17})
let hallCloset = new Room(19, "the neighbor's hall closet", {east: 18})
let study = new Room(20, "the neighbor's Study", {north: 21}, null, thatThing)
let den = new Room(21, "the neighbor's Den", {south: 20, north: 22, west: 16})
let denTwo = new Room(22, "the neighbor's Den", {west: 17, south: 21, upstairs: 23},)
let upstairsHall = new Room(23, "the neighbor's upstairs hall", {north: 27, east: 24, downstairs: 22}, null, barbie)
let upstairsHallTwo = new Room(24, "the neighbor's upstairs hall", {west: 23, south: 26, north: 28, east: 25})
let upstairsHallThree = new Room(25, "the neighbor's upstairs hall", {west: 24, upstairs: 29})
let neighborBedroom = new Room(26, "the neighbor's Bedroom", {north: 24})
let neighborGuestBedroom = new Room(27, "the neighbor's Guest Bedroom", {south: 23}, null, bidi)
let neighborBathroom = new Room(28, "the neighbor's Bathroom", {south: 24})
let attic = new Room(29, "the neighbor's Attic", {hidden: 30, downstairs: 25}, null, oneMoreTime)
let hiddenRoom = new Room(30, "the neighbor's hidden room", {east: 29}, null, trophy)



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
