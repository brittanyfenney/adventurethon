import React from "react";
import { connect } from "react-redux";
import { updatedUser } from "../store";
import history from "../history";
import "98.css";
import "../index.css";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {}

  handleSubmit(evt) {
    evt.preventDefault();
    const name = evt.target.name.value;
    this.props.updateCurrentUser({ name: name });
    history.push("/entry");
  }

  render() {
    return (
      <div className="signup-window">
        <p>What's your name?</p>
        <form onSubmit={this.handleSubmit} name="signup">
          <input name="name" type="text" id="sign-up"></input>
          <br />
          <button type="submit">Enter Game</button>
        </form>
      </div>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    updateCurrentUser(info) {
      dispatch(updatedUser(info));
    },
  };
};

export default connect(null, mapDispatch)(SignUp);
