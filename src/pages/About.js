/* global $ */

import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import FullScreenModal from "../components/atoms/FullScreenModal";


const About = () => {

    const [showModal, setShowModal] = useState(false);
  

    const aa = "super";
    let n = 0;

    const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

    useEffect(() => {
        
        localStorage.setItem('toto', n++)
        console.log("Initializing jQuery UI..." + parseInt(localStorage.getItem('toto')));
        
    
        if (window.$ && window.$.fn.dialog) {
          $("#myDialog").dialog({
            autoOpen: false,
            modal: true,
            width: 400,
            height: 200,
            buttons: {
              "Fermer": function () {
                $(this).dialog("close");
              }
            }
          });
        } else {
          console.error("jQuery UI dialog is not available.");
        }
      }, []); // Ajout de [] pour exécuter une seule fois après le rendu initial
    
      // Fonction pour ouvrir la boîte de dialogue
      const openDialog = () => {
        if (window.$ && window.$.fn.dialog) {
          $("#myDialog").dialog("open");
        } else {
          console.error("Impossible d'ouvrir la boite de dialogue : jQuery UI non chargé.");
        }
      };
    return (
     <div>
      <h1>Page principale</h1>
      <button className="btn btn-primary" onClick={handleOpen}>
        Ouvrir la modal plein écran
      </button>

      <FullScreenModal show={showModal} onClose={handleClose} title="Ma super modal">
        <p>Voici le contenu de la modal en plein écran.</p>
      </FullScreenModal>
    </div>
    );
  };
  
  export default About;