// ACTION TYPES

const ADD_SINGLE = "ADD_SINGLE";

// ACTION CREATORS

export const addSingle = (single) => ({ type: ADD_SINGLE, single });

// THUNK CREATORS

const defaultPlaylist = [];

// REDUCER
export default function playlist(state = defaultPlaylist, action) {
  switch (action.type) {
    case ADD_SINGLE:
      return [...state, action.single];
    default:
      return state;
  }
}
