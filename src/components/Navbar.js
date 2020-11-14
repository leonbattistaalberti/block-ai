import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <p>Home</p>
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
