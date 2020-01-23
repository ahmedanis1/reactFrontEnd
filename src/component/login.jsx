import React from "react";
import { setInStorage } from "../storage";
// import { useHistory } from "react-router-dom";
// import { browserHistory } from "react-router";
import axios from "axios";
import { withRouter, Redirect } from "react-router-dom";

import logo from "../images/images/logo.png";
import bg from "../images/images/login/bg.jpg";

class SimpleFormExample extends React.Component {
  state = {
    formData: {
      email: "",
      password: ""
    },
    res: "",
    isAuth: false,
    input: true
  };

  handleChange = event => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
    const { email, password } = this.state.formData;
    if (email !== "" && password !== "") {
      this.setState({ input: false });
    } else {
      this.setState({ input: true });
    }
  };
  handleClick = () => {
    const url = "/signup";

    this.props.history.push(url);
  };

  handleSubmit = async e => {
    try {
      e.preventDefault();
      {
        const { email, password } = this.state.formData;

        const result = await axios.post(`http://localhost:3000/auth/login`, {
          email,
          password
        });
        console.log(result);
        if (!result.data.token) {
          console.log(this.state.res);
        } else {
          setInStorage("Vehicle", {
            token: result.data.token,
            user: result.data.user
          });
          this.setState({ isAuth: true });
        }
      }
    } catch (error) {
      this.setState({ res: "failed to login" });
      console.log(error);
    }
  };

  render() {
    return (
      <React.Fragment>
        <section className="hero-section">
          <div
            className="hero-slider "
            style={{
              backgroundImage: `url(${bg})`,
              width: "100%",
              height: 969,
              top: 100,
              backgroundSize: "cover",
              backgroundPosition: "center",
              paddingTop: "3px"
            }}
          >
            <div className="login-frame">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12 logo-container">
                    <img src={logo} alt="logo" style={{ width: "200px" }} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-container">
                    <form onSubmit={this.handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Password"
                          onChange={this.handleChange}
                        />
                      </div>
                      {/* <a href="#" className="forgot-password">
                        Forgot Password?
                      </a> */}
                      <div className="row">
                        <div className="col-md-6">
                          <input
                            type="submit"
                            value="Login"
                            disabled={this.state.input}
                            className="btn btn-success btn-block"
                          />
                          <p>{this.state.res}</p>
                          {this.state.isAuth === true ? (
                            <Redirect to="/" />
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="col-md-6">
                          <button
                            href="#"
                            type="button"
                            className="btn btn-success btn-block"
                            onClick={this.handleClick}
                          >
                            Sign Up
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default withRouter(SimpleFormExample);
