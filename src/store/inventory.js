// ACTION TYPES

const ADD_ITEM = "ADD_ITEM";
const ADD_SINGLE = "ADD_SINGLE";

// ACTION CREATORS

export const addItem = (item) => ({ type: ADD_ITEM, item });
export const addSingle = (single) => ({ type: ADD_SINGLE, single });

const defaultInventory = { backpack: false };

// REDUCER
export default function user(state = defaultInventory, action) {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, ...action.item };
    case ADD_SINGLE:
      return { ...state, singles: [...action.state] };
    default:
      return state;
  }
}
