import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css";

const Navigation = () => {
  return (
    <div className="text-center mt-4">
      <h1 className="text-primary text-center">API FOOT</h1>
      <ul className="list-inline">
        <NavLink to="/">
          <li>home</li>
        </NavLink>
        <NavLink to="/about">
          <li>about</li>
        </NavLink>
        <NavLink to="/pays">
          <li>matchs</li>
        </NavLink>
        <NavLink to="/test">
          <li>tester</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
