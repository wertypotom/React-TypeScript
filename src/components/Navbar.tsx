import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FunctionComponent = () => {
  return (
    <nav>
      <div className="nav-wrapper purple darken-2 px1">
        <NavLink to="/" className="brand-logo">
          React + TS
        </NavLink>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">To Do List</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
