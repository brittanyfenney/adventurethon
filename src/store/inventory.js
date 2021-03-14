// ACTION TYPES

const ADD_ITEM = "ADD_ITEM";

// ACTION CREATORS

export const addItem = (item) => ({ type: ADD_ITEM, item });

const defaultInventory = { backpack: false };

// REDUCER
export default function user(state = defaultInventory, action) {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, ...action.item };
    default:
      return state;
  }
}
