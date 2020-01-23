import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
// import Button from "@material-ui/core/Button";
import axios from "axios";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import { withRouter } from "react-router-dom";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

class SimpleTable extends React.Component {
  state = {
    allUser: []
  };
  componentDidMount() {
    //   const Auth = new AuthHelperMethods();
    //   if (!Auth.loggedIn()) {
    //       this.props.history.push('/');
    //   } else {

    this.getAllRegisteredUsers();
    console.log(this.state.allUser);

    //}
  }
  getAllRegisteredUsers = async () => {
    let result = await axios.get("http://localhost:3000/admin/users");
    // , {
    //   headers: {
    //     "x-auth-token": localStorage.getItem("id_token")
    //   }
    // });
    console.log(result.data.users);

    this.setState({ allUser: result.data.users });
  };
  removeAccount = async identity => {
    let result = await axios.delete(
      `http://localhost:3000/admin/user/${identity}`
    );
    //   {
    //     headers: {
    //       "x-auth-token": localStorage.getItem("id_token")
    //     }
    //   }
    // );
    alert(result.data.message);
    this.getAllRegisteredUsers();
  };

  //   deActiveAccount = async identity => {
  //     const h = new Headers();
  //     const token = localStorage.getItem("id_token");
  //     h.append("x-auth-token", token);
  //     await fetch(
  //       `http://localhost:4000/administeration/update/${identity}/deactive`,
  //       {
  //         headers: h,
  //         method: "PUT"
  //       }
  //     )
  //       .then(res => {
  //         alert("User Deactivated!");

  //         this.getAllRegisteredUsers();
  //       })
  //       .catch(err => alert(err.message));
  //   };
  //   activeAccount = async identity => {
  //     const h = new Headers();
  //     const token = localStorage.getItem("id_token");
  //     h.append("x-auth-token", token);
  //     fetch(`http://localhost:4000/administeration/update/${identity}/active`, {
  //       headers: h,
  //       method: "PUT"
  //     })
  //       .then(res => {
  //         alert("User Activated!!");

  //         this.getAllRegisteredUsers();
  //       })
  //       .catch(err => alert(err.message));
  //   };

  render() {
    return (
      <Table
        style={{ marginTop: "100px", backgroundColor: "white" }}
        className={styles.table}
      >
        <TableHead>
          <TableRow style={{ color: "white" }}>
            <TableCell> Name</TableCell>
            <TableCell align="right">Email</TableCell>

            <TableCell align="right">Account Status</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.allUser.map(row => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                {console.log(row.isVerified)}
                {row.fullName}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>

              <TableCell align="right">
                {row.isVerified === true ? "verified" : "not verified"}
              </TableCell>
              <TableCell align="right">
                {/* <Button
                  className="btn-danger"
                  onClick={() => this.deActiveAccount(row._id)}
                  //   variant="contained"
                  //   color="secondary"
                >
                  <i className="fa fa-ban " aria-hidden="true"></i>
                </Button> */}
                {/* <Button onClick={() => this.activeAccount(row._id)}>
                  <i className="fa fa-check" aria-hidden="true"></i>
                </Button> */}
                <Fab
                  color="secondary"
                  aria-label="edit"
                  //   onClick={() => this.activeAccount(row._id)}
                >
                  <EditIcon />
                </Fab>
                <Fab
                  color="secondary"
                  aria-label="edit"
                  onClick={() => this.removeAccount(row._id)}
                >
                  <DeleteIcon />
                </Fab>
                {/* <Button onClick={() => this.removeAccount(row._id)}>
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </Button> */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(SimpleTable));
