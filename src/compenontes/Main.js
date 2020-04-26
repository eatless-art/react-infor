import React, { Component } from "react";
import Header from "./Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Shezhi from "./Shezhi";
import Helpcenter from "./Helpcenter";
import Connectus from "./Connectus";
import Customer from "./Customer";
import Add from "./Add";
import ActivityMange from "./ActivityMange";
import AddActivity from "./AddActivity";
import Bianjihuodong from "./Bianjihuodong";
import Activity from "./Activity";
class Mian extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Route exact path="/" component={Login} />
        <Route path="/header" component={Home} />
        <Route path="/shezhi" component={Shezhi} />
        <Route path="/helpcenter" component={Helpcenter} />
        <Route path="/connectus" component={Connectus} />
        <Route path="/customer" component={Customer} />
        <Route path="/add" component={Add} />
        <Route path="/activitymange/:id" component={ActivityMange} />
        <Route path="/addactivity/:id" component={AddActivity} />
        <Route path="/bianjihuodong/:id" component={Bianjihuodong} />
        <Route path="/activity/:id" component={Activity} />
      </Router>
    );
  }
}
export default Mian;
