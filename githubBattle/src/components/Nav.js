import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const links = ["Home", "Popular", "Battle"];
function Nav() {
  return (
    <ul className="nav">
      {links.map((link, index) => {
        return (
          <li key={index}>
            <NavLink exact to={link === "Home" ? "/" : link.toLowerCase()}>
              {link}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default Nav;
