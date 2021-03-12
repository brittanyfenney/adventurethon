import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import playlist from "./playlist";
import user from "./user"
import { items, rooms } from "./world"
import player from "./player"
import inventory from "./inventory"

const reducer = combineReducers({ playlist, user, items, rooms, player, inventory });
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./playlist";
export * from "./user";
export * from "./world";
export * from "./player";
export * from "./inventory";
