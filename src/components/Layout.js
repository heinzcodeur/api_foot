import React from "react";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="wizard">
      <Navigation />
      <main>
        <Outlet /> {/* Render the routed page content here */}
      </main>
    </div>
  );
};

export default Layout;
