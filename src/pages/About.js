/* global $ */

import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import FullScreenModal from "../components/atoms/FullScreenModal";
import ErrorZone from "../components/atoms/ErrorZone";
import Home from "./Home";
import { useModal } from "../context/ModalContext";


const About = () => {

  // const { modalContent, modalTitle, closeModal } = useModal();
  //   // const [showModal, setShowModal] = useState(false);

  //   const aa = "super";
  //   let n = 0;

  //   const handleOpen = () => setShowModal(true);
  //   // const handleClose = () => setShowModal(false);

  //   useEffect(() => {
        
  //       localStorage.setItem('toto', n++)
  //       console.log("Initializing jQuery UI..." + parseInt(localStorage.getItem('toto')));
        
    
  //       if (window.$ && window.$.fn.dialog) {
  //         $("#myDialog").dialog({
  //           autoOpen: false,
  //           modal: true,
  //           width: 400,
  //           height: 200,
  //           buttons: {
  //             "Fermer": function () {
  //               $(this).dialog("close");
  //             }
  //           }
  //         });
  //       } else {
  //         console.error("jQuery UI dialog is not available.");
  //       }
  //     }, []); // Ajout de [] pour exécuter une seule fois après le rendu initial
  //     // Fonction pour ouvrir la boîte de dialogue
  //     const openDialog = () => {
  //       if (window.$ && window.$.fn.dialog) {
  //         $("#myDialog").dialog("open");
  //       } else {
  //         console.error("Impossible d'ouvrir la boite de dialogue : jQuery UI non chargé.");
  //       }
  //     };
    return (
     <div className="mt-4">
      <h1 className="text-center">Page principale</h1>
      {/* <button className="btn btn-primary" onClick={handleOpen}>
        Ouvrir la modal plein écran
      </button> */}

      </div>   
    )}; 
  //<FullScreenModal 
  //       show={!!modalContent}  
  //       onClose={closeModal}   
  //       title={modalTitle || "Ma super modal"} >
  //       <Home />
  //     </FullScreenModal>
  //   </div>
  //   );
  // };
  
  export default About;