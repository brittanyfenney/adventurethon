import React from "react";
import { Route, Switch } from "react-router-dom";
import { SignUp, SignIn, Window, Entry, Room } from "./components";

export default function Routes(props) {
  const togglePlayer = props.togglePlayer;
  return (
    <Switch>
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <Route path="/entry" component={Entry} />
      <Route
        path="/room/:id"
        render={(props) => <Room {...props} togglePlayer={togglePlayer} />}
      />
      <Route exact path="/" component={Window} />
    </Switch>
  );
}

