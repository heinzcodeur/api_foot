import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css";
import Timer from "./Timer";

const Navigation = () => {
  return (
    <div className="container-fluid bg-dark fixed-top">
      <div className="row">
        <div className="col-10 mx-auto mt-4">
          <h1 className="text-primary text-center">API FOOT (tennis live)</h1>
          <ul className="list-inline text-center">
            <NavLink to="/">
              <li>home</li>
            </NavLink>
            <NavLink to="/about">
              <li>about</li>
            </NavLink>
            <NavLink to="/live/tennis">
              <li>matchs</li>
            </NavLink>
            <NavLink to="/ranking">
              <li>ranking</li>
            </NavLink>
            <NavLink to="/tennis">
              <li>tennis</li>
            </NavLink>
            <NavLink to="/test">
              <li>tester</li>
            </NavLink>
            <NavLink to="">
              <li>appels</li>
            </NavLink>
          </ul>
          {/* <Timer handleButtonClick={handleButtonClick} delay={delay} activeButton={activeButton} limitRequestLeft={limitRequestLeft}></Timer> */}

        </div>
      </div>
    </div>
  );
};

export default Navigation;
