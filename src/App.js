import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Countries from './components/Countries';
import Test from './components/Test';

const App= () => {
  return (
    <BrowserRouter>
      
      <h1 className="text-primary text-center">API FOOT</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pays" element={<Countries />} />
        <Route path="/test" element={<Test />} />
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
}

export default App;
