import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Countries from "./components/Countries";
import Test from "./components/Test";
import Ranking from "./pages/Ranking";
import Tennis from "./pages/Tennis";
import ApiTennis from "./components/ApiTennis";
import FormTest from "./components/atoms/formTest";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkbox" element={<FormTest/>} />
          <Route path="/about" element={<About />} />
          <Route path="/pays" element={<Countries />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/tennis" element={<Tennis />} />
          <Route path="/api/tennis" element={<ApiTennis />} />
          <Route path="*" element={<Home />} />
        </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
};

export default App;
