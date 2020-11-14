import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <Link to="/home">
          <p>Home</p>
        </Link>
        <p>Categories</p>
      </div>
      <div className="navbar__right">
        <p>Track Order</p>
        <p>Manage Orders</p>
      </div>
    </nav>
  );
};

export default Navbar;
