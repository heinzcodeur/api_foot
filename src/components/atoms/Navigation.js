import React from "react";
import { NavLink } from "react-router-dom";
import '../../assets/css/navigation.css'
const Navigation = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto mt-4">
          <h1 className="text-primary text-center">API FOOT (tennis live)</h1>
          <ul className="list-inline text-center">
            <NavLink to="/">
              <li>home</li>
            </NavLink>
            <NavLink to="/checkbox">
              <li>checkbox</li>
            </NavLink>
            <NavLink to="/about">
              <li>about</li>
            </NavLink>
            <NavLink to="/pays">
              <li>matchs</li>
            </NavLink>
            <NavLink to="/ranking">
              <li>ranking</li>
            </NavLink>
            <NavLink to="/tennis">
              <li>tennis</li>
            </NavLink>
            <NavLink to="/api/tennis">
              <li>api-tennis</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;