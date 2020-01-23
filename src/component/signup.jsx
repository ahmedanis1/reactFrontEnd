import React from "react";
// import Button from "@material-ui/core/Button";
// import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { Link } from "react-router-dom";
// import TextField from "@material-ui/core/TextField";
// import { Form } from "react-bootstrap";
//import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
//import Card from "@material-ui/core/Card";
import axios from "axios";
import { withRouter } from "react-router-dom";
import bg from "../images/images/login/bg.jpg";
import logo from "../images/images/logo.png";

class SimpleFormExample extends React.Component {
  state = {
    formData: {
      fullName: "",
      email: "",

      password: ""
    },
    response: ""
  };

  //componentDidMount() {}

  // const Auth = new AuthHelperMethods();
  // if (!Auth.loggedIn()) {
  //     this.props.history.push('/');
  //}

  // custom rule will have name 'isPasswordMatch'
  //     ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
  //         const { formData } = this.state;
  //         if (value !== formData.password) {
  //             return false;
  //         }
  //         return true;
  //     });
  // }

  handleChange = event => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;

    this.setState({ formData });
  };

  handleSubmit = async e => {
    try {
      e.preventDefault();
      const { formData } = this.state;

      const result = await axios.post(`http://localhost:3000/auth/signup`, {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password
      });
      this.setState({ response: result.data });
    } catch (error) {}
  };

  render() {
    // const { formData } = this.state;

    return (
      <React.Fragment>
        {/* <img src="/bg.jpg" className="bgimage" />   */}
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
            <div className="signup-frame">
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
                        <label htmlFor="exampleInputEmail1">Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          aria-describedby="emailHelp"
                          placeholder="Enter name"
                          name="fullName"
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                          name="email"
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          name="password"
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">
                          confirm Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Re type Password"
                          name="confirmPassword"
                          onChange={this.handleChange}
                        />
                      </div>
                      <Link to="/login" className="signin">
                        Already have an account?
                      </Link>
                      <div className="row">
                        <div className="col-md-6">
                          <input
                            type="submit"
                            className="btn btn-success btn-block"
                            value="sign up"
                          />
                          {this.state.response === "" ? (
                            ""
                          ) : (
                            <p>{this.state.response}</p>
                          )}
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
