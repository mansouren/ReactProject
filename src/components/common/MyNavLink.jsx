import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class MyNavLink extends Component {
  state = {};
  render() {
    const { path, name, icon } = this.props;

    return (
      <NavLink to={path} className="nav_link">
        <i className={"bx nav_icon " + icon}></i>
        <span className="nav_name">{name}</span>
      </NavLink>
    );
  }
}

export default MyNavLink;
