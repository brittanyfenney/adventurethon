import React from "react";
import { Route, Switch } from "react-router-dom";
import { SignUp, Player, Window, Entry, Room } from "./components";

export default function Routes(props) {
  console.log("ROUTE PROPS =>", props)
  const togglePlayer = props.togglePlayer
  return (
    <Switch>
      <Route path="/signup" component={SignUp} />
      <Route path="/player" component={Player} />
      <Route path="/entry" component={Entry} />
      <Route
      path="/room/:id"
      render={(props) => (
        <Room {...props} togglePlayer={togglePlayer} />
      )}
      />
      <Route path="/" component={Window} />
    </Switch>
  );
}
