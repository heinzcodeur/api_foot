import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css";
import axios from "axios";
import { useApiKey } from "./context/TennisContext";
import withApiKey from "./context/withApiKey";
// import { useTennis } from "./context/TennisContext";

const Navigation = ({ apiKey }) => {

  // const countriesResponse = axios.get('/files/countries.json');
  // const apiKey = process.env.REACT_APP_API_TENNIS_KEY;
  // const { apiKey } = useApiKey();
  // console.log("la clé " + {apiKey})


  return (
    
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto mt-4">
          <h1 className="text-danger text-center">API FOOT (tennis live) </h1>
          <ul className="list-inline text-center">
            <NavLink to="/">
              <li>home</li>
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
            <NavLink to="/api/olympics">
              <li>paris 2024</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default withApiKey(Navigation);
