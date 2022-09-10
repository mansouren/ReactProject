import React, { Component } from "react";
import MyNavLink from "../common/MyNavLink";
import { routes } from "../../data/routes";
import { NavLink, Link } from "react-router-dom";

class SideBar extends Component {
  getNavbarClasses = (isOpen) => "l-navbar " + (isOpen && "show");

  render() {
    return (
      <div className={this.getNavbarClasses(this.props.isOpen)}>
        <nav className="nav">
          <div>
            <NavLink to="/" className="nav_logo">
              <i className="bx bx-layer nav_logo-icon"></i>
              <span className="nav_logo-name">Switch Config</span>
            </NavLink>
            <div className="nav_list">
              {routes.map((route) => (
                <MyNavLink
                  key={route.path}
                  path={route.path}
                  name={route.name}
                  icon={route.icon}
                />
              ))}
            </div>
          </div>
          <Link to="/logOut" className="nav_link">
            <i className="bx bx-log-out nav_icon"></i>
            <span className="nav_name">SignOut</span>
          </Link>
        </nav>
      </div>
    );
  }
}

export default SideBar;
