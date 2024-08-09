import React, { useEffect } from "react";
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
import Olympics from "./components/Olympics";
import Athlete from "./pages/Athlete";
import Layout from "./components/Layout";
import { checkInternetConnection } from "./functions/mixins";


  const App = () => {
    
    useEffect(() => {
      checkInternetConnection();
    }, []); // Le tableau vide [] signifie que cet effet s'exécute une seule fois lors du montage du composant

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pays" element={<Countries />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/tennis" element={<Tennis />} />
            <Route path="/api/tennis" element={<ApiTennis />} />
            <Route path="/api/olympics" element={<Olympics />} />
            <Route path="*" element={<Home />} />
            <Route path="/athletes/:athleteId/:athleteRank" element={<Athlete />} />

          </Route>
        </Routes>
      </BrowserRouter>
      
    );
  };

  export default App;
