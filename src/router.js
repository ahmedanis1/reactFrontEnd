import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./component/main/main";
import Signup from "./component/signup";
import Logout from "./component/logout";
import Login from "./component/login";
import AdminTab from "./component/admintab/AdminTab";
const Routers = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" exact component={Login} />
        <Route path="/logout" exact component={Logout} />
        <Route path="/admin" exact component={AdminTab} />
      </Switch>
    </Router>
  );
};
export default Routers;
