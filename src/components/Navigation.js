import React from "react";
import { NavLink } from "react-router-dom";
import './navigation.css';


const Navigation = () => {
    return (
        <div>
            <ul>
                <NavLink to="/">
                    <li>home</li>
                </NavLink>
                <NavLink to="/about">
                    <li>about</li>
                </NavLink>
                <NavLink to="/pays">
                    <li>matchs</li>
                </NavLink>
            </ul>
        </div>
    )
};

export default Navigation;