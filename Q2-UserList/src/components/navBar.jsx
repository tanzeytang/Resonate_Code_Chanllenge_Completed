import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-right bg-light">
      <Link className="navbar-brand" to="/">
        Users Overview
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        style={{ margin: "0 0 0 100px" }}
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link style={{ float: "right" }} className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
