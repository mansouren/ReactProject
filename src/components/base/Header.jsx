import React from "react";

const Header = (props) => {
  const { isOpen, doToggle } = props;

  return (
    <header className={getHeaderClasses(isOpen)}>
      <div className="header_toggle">
        <i className={getToggleClasses(isOpen)} onClick={doToggle}></i>
      </div>
      <div className="header_img">
        <img src="https://i.imgur.com/hczKIze.jpg" alt="" />
      </div>
    </header>
  );
};

const getHeaderClasses = (isOpen) => "header " + (isOpen ? "body-pd" : "");
const getToggleClasses = (isOpen) => "bx bx-menu " + (isOpen ? "bx-x" : "");

export default Header;
