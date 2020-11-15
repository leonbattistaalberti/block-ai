import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <p>
          {" "}
          <Link to="/home" className="navbar__navLink">
            Home
          </Link>
        </p>
        <p>
          <Link to="/categories" className="navbar__navLink">
            Categories
          </Link>
        </p>
      </div>
      <div className="navbar__right">
        <p>
          <Link className="navbar__navLink">Track Order</Link>
        </p>
        <p>
          <Link to="/manageorders" className="navbar__navLink">
            Manage Orders
          </Link>
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
