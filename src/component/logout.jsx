import React from "react";

// import { Link } from "react-router-dom";
import { setInStorage } from "../storage";
import { withRouter, Redirect } from "react-router-dom";

class SimpleFormExample extends React.Component {
  state = {
    isAuth: true
  };
  componentDidMount() {
    setInStorage("Vehicle", {
      token: "",
      user: ""
    });
    this.setState({ isAuth: false });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.isAuth === true ? <Redirect to="/" /> : ""}
      </React.Fragment>
    );
  }
}

export default withRouter(SimpleFormExample);
