import React, { Component } from "react";
// import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import placeholder from "../images/download.png";
import logo from "../images/images/logo.png";

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel
        dynamicHeight="true"
        centerMode="true"
        autoPlay="true"
        showStatus="false"
        showIndicators="false"
        showThumbs="false"
        infiniteLoop="true"
      >
        <div login-frame>
          <img src={logo} alt="" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={placeholder} alt="" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={logo} alt="" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    );
  }
}

// ReactDOM.render(<DemoCarousel />, document.querySelector(".demo-carousel"));

export default DemoCarousel;
