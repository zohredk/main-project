import React from "react";
import "./NavItems.css";
import NavItem from "../NavItem/NavItem";

const NavItems = () => {
  return (
    <ul className="nav-items">
      <NavItem link="/">Shopping</NavItem>
      <NavItem link="/">Checkout</NavItem>
    </ul>
  );
};

export default NavItems;
