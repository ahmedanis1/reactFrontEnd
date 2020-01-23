import React from "react";

import { Link } from "react-router-dom";

import { withRouter } from "react-router-dom";

import logo from "../../images/images/logo.png";
// import bg from "../images/images/login/bg.jpg";

class SimpleFormExample extends React.Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <header className="header-section clearfix">
          <img src={logo} alt="logo" className="logoclass" />

          <div className="header-right headingColor">
            <span style={{ color: "#0899fa" }}>|</span>
            <div className="user-panel">
              <Link to="/login" style={{ color: "#0899fa" }}>
                Login
              </Link>
              <Link to="/Signup" style={{ color: "#0899fa" }}>
                Signup
              </Link>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default withRouter(SimpleFormExample);
