import React, { Component } from "react";

import Header from "./base/Header";
import SideBar from "./base/Sidebar";
import Content from "./base/Content";
import Footer from "./base/Footer";

import "./site.css";

class Site extends Component {
  state = {
    isOpen: true,
  };

  handleNavbarToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  getSiteClasses = (isOpen) => (isOpen ? "body-pd" : "");

  render() {
    const { isOpen } = this.state;

    return (
      <div className={this.getSiteClasses(isOpen)}>
        <Header isOpen={isOpen} doToggle={this.handleNavbarToggle} />
        <SideBar isOpen={isOpen} />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default Site;
