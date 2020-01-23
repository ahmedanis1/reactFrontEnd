import React from "react";
import Coverflow from "react-coverflow";

//import logo from "../../images/images/logo.png";
import bg from "../images/images/login/bg.jpg";
import royal from "../images/royal.jpg";
import royal1 from "../images/royal1.jpg";

class SimpleFormExample extends React.Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Coverflow
          width={960}
          height={480}
          displayQuantityOfSide={2}
          navigation={false}
          enableHeading={false}
        >
          <div role="menuitem" tabIndex="0">
            <img
              src={royal}
              alt="title or description"
              style={{ display: "block", width: "100%" }}
            />
          </div>
          <img src={royal1} alt="title or description" />
          <img src={bg} alt="title or description" />
        </Coverflow>
        ,
      </React.Fragment>
    );
  }
}

export default SimpleFormExample;
