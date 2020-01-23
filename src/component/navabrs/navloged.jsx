import React from "react";

import { Link } from "react-router-dom";
import { getFromStorage } from "../../storage";

import { withRouter } from "react-router-dom";

import logo from "../../images/images/logo.png";
// import bg from "../images/images/login/bg.jpg";

class SimpleFormExample extends React.Component {
  state = {
    name: ""
  };
  async componentDidMount() {
    const a = getFromStorage("Vehicle");
    console.log(a.user.fullName);

    this.setState({ name: a.user.fullName });
  }

  render() {
    // console.log(this.state.user.fullName);
    return (
      <React.Fragment>
        <header className="header-section clearfix">
          <img src={logo} alt="logo" className="logoclass" />

          <div className="header-right">
            {/* <span>|</span> */}
            <div className="user-panel">
              <span style={{ color: "#0899fa" }}>Welcome</span>
              <span style={{ color: "#0899fa" }}>{this.state.name}</span>
              <Link to="Logout">logout</Link>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default withRouter(SimpleFormExample);
