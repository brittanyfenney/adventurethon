// ACTION TYPES

const TOGGLE_PLAYER = "TOGGLE_PLAYER";

// ACTION CREATORS

export const togglePlayer = () => ({ type: TOGGLE_PLAYER });

// REDUCER

export default function player(state = false, action) {
  switch (action.type) {
    case TOGGLE_PLAYER:
      return !state;
    default:
      return state;
  }
}
