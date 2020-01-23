import React from "react";
// import { Link } from "react-router-dom";
// import logo from "../../images/images/logo.png";
import Navmain from "../navabrs/navbarmain";
import { getFromStorage } from "../../storage";
import Navloged from "../navabrs/navloged";
import placeholder from "../../images/download.png";
import bg from "../../images/images/login/bg.jpg";
// import Signup from "../signup.jsx";
import Slider from "../slider";
class Main extends React.Component {
  state = {
    user: ""
  };
  async componentDidMount() {
    const a = getFromStorage("Vehicle");
    console.log(a);
    if (a !== null) {
      this.setState({ user: a.token });
    }
  }
  render() {
    return (
      <React.Fragment>
        {this.state.user === "" ? <Navmain /> : <Navloged />}
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
            <Slider />
          </div>
        </section>

        <section>
          <img src={placeholder} alt="logo" />
          <div className="container text-white">
            <div className="section-title">
              <h2>How it works</h2>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="how-item">
                  <div className="hi-icon">
                    <img src={placeholder} alt="logo" />
                  </div>
                  <h4>Create an account</h4>
                  <p style={{ color: "#0899fa" }}>
                    Lorem ipsum dolor sit amet, consectetur adipi-scing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum sus-pendisse ultrices gravida.{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="how-item">
                  <div className="hi-icon">
                    <img src={placeholder} alt="logo" />
                  </div>
                  <h4>Choose a plan</h4>
                  <p style={{ color: "#0899fa" }}>
                    Donec in sodales dui, a blandit nunc. Pellen-tesque id eros
                    venenatis, sollicitudin neque sodales, vehicula nibh. Nam
                    massa odio, portti-tor vitae efficitur non.{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="how-item">
                  <div className="hi-icon">
                    <img src={placeholder} alt="logo" />
                  </div>
                  <h4>Download Music</h4>
                  <p>
                    Ablandit nunc. Pellentesque id eros venenatis, sollicitudin
                    neque sodales, vehicula nibh. Nam massa odio, porttitor
                    vitae efficitur non, ultric-ies volutpat tellus.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer-section">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-7 order-lg-2">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="footer-widget">
                      <h2>About us</h2>
                      <ul>
                        <li>Our Story</li>
                        <li>Sol Music Blog</li>
                        <li>History</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="footer-widget">
                      <h2>Products</h2>
                      <ul>
                        <li>Music</li>
                        <li>Subscription</li>
                        <li>Custom Music</li>
                        <li>Footage</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="footer-widget">
                      <h2>Playlists</h2>
                      <ul>
                        <li>Newsletter</li>
                        <li>Careers</li>
                        <li>Press</li>
                        <li>Contact</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-5 order-lg-1">
                <img src={placeholder} alt="logo" />

                <div className="social-links">
                  <i className="fa fa-instagram"></i>

                  <i className="fa fa-pinterest"></i>

                  <i className="fa fa-facebook"></i>

                  <i className="fa fa-twitter"></i>

                  <i className="fa fa-youtube"></i>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
export default Main;
