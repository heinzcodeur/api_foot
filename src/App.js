import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Test from "./components/Test";
import Ranking from "./pages/Ranking";
import Tennis from "./pages/Tennis";
import LiveTennis from "./components/LiveTennis";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/live/tennis" element={<LiveTennis />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/tennis" element={<Tennis />} />
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<Home />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
