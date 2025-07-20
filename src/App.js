import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import FullScreenModal from "./components/atoms/FullScreenModal";

import { ModalProvider, useModal } from "./context/ModalContext";

const GlobalModal = () => {
  const { modalContent, modalTitle, closeModal } = useModal();

  return (
    <FullScreenModal show={!!modalContent} onClose={closeModal} title={modalTitle}>
      {modalContent}
    </FullScreenModal>
  );
};

const App = () => {
  useEffect(() => {
    try {
      checkInternetConnection();
      throw new Error("Erreur déclenchée dans App");
    } catch (err) {
      console.error("Erreur capturée dans useEffect :", err);
    }
  }, []);

  return (
    <ModalProvider>
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
            <Route path="/athletes/:athleteId/:athleteRank" element={<Athlete />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
        <GlobalModal /> {/* Affichage de la modal globale */}
      </BrowserRouter>
    </ModalProvider>
  );
};

export default App;