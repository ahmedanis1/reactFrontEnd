import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import bg from "../../images/images/login/bg.jpg";
import logo from "../../images/images/logo.png";
import AdminViewAllUser from "../admintab/AdminViewAllUser";
// import Signup from "../Signup/Signup";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
});

class ScrollableTabsButtonForce extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

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
              backgroundPosition: "center"
            }}
          >
            <div className={classes.root}>
              <AppBar
                position="static"
                color="default"
                style={{
                  // backgroundColor: "black",
                  color: "red",
                  backgroundColor: "black",
                  backgroundImage: `url(${logo})`,
                  backgroundSize: "350px 70px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "left",

                  borderBottom: "1px solid red"
                }}
              >
                <Tabs
                  value={value}
                  onChange={this.handleChange}
                  variant="scrollable"
                  scrollButtons="on"
                  indicatorColor="red"
                  textColor="black"
                  style={{ paddingLeft: "1500px", top: 0 }}
                >
                  <Tab
                    label=" Add Users"
                    icon={<i className="fas fa-restroom"></i>}
                  />

                  <Tab
                    label="All Users"
                    icon={<i className="fas fa-notes-medical"></i>}
                  />
                </Tabs>
                {/* <img src={logo} alt="logo" className="logoclass" /> */}
              </AppBar>
              {/* { {value === 2 && (
          <TabContainer>
            <Signup />
          </TabContainer>
        )}

        {value === 1 && (
          <TabContainer>
            <AdminViewAllUser />
          </TabContainer>
        )} } */}
            </div>
            <AdminViewAllUser />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

ScrollableTabsButtonForce.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ScrollableTabsButtonForce);
