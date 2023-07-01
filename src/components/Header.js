import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <h3>Shopping Cart</h3>
      </div>
      <nav>
        <NavLink to="/f4-contest3" className="ancher">
          Home Page
        </NavLink>
        <NavLink to="/cart" className="ancher">
          Cart Page
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
