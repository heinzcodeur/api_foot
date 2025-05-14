/* global $ */

import React, { useEffect } from "react";
import Navigation from "../components/Navigation";


const About = () => {

    const aa = "super";
    let n = 0;
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
          console.error("Impossible d'ouvrir la boîte de dialogue : jQuery UI non chargé.");
        }
      };
    return (
      <div>
        <h1 className="text-center mt-3">ABOUT</h1>
        <p className="m-4 text-justify text-info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio magnam velit earum id expedita! Veritatis
          molestiae optio explicabo aut veniam vero, voluptatum quisquam voluptate officiis a expedita in, blanditiis ut!
          Sed fuga explicabo consequatur? Reiciendis magnam dicta soluta amet, tenetur atque excepturi sequi iure, dolorum
          ducimus nostrum repellat libero consequatur, a aspernatur! Vel pariatur sequi provident similique molestias numquam
          esse, veniam explicabo sapiente quod excepturi magni aut, placeat deserunt eaque dicta sint modi, sit voluptas. Eius
          quia quas aspernatur iste enim optio non adipisci! Aspernatur vitae autem minus fugit dolorum, eveniet deleniti aut
          nobis neque vel illo facere! Illo laborum aspernatur excepturi exercitationem? Fuga eos excepturi velit eius,
          repudiandae, magni asperiores, dolorem voluptatibus ab laudantium doloribus dignissimos tenetur id fugiat recusandae
          molestiae ut esse aperiam nesciunt pariatur. Molestias, quidem ipsum. Ex, aliquam. Facere, corrupti magnam provident
          quae fugiat est iste ut totam ratione, soluta libero rem? Quod eum corporis earum vel repellat, modi adipisci, saepe
          nam expedita sequi quas temporibus nulla! Repellat velit odit ullam a accusamus minus ab, obcaecati numquam vitae
          veritatis rem, eveniet error similique facilis ratione dolorum adipisci, quo debitis! Ratione explicabo, dolores
          assumenda illo culpa laudantium nesciunt aliquid nemo nostrum labore deserunt neque veniam repudiandae aperiam numquam
          a ut tenetur nihil excepturi! Animi labore provident aliquid optio, ut mollitia hic atque. Incidunt neque eveniet
          est et velit ab cumque ex tenetur alias dolorum dolores deserunt laudantium error perspiciatis, ad amet ut itaque ipsum
          magni dicta. Veritatis a voluptatibus doloribus, provident distinctio suscipit ipsa minus repellendus et commodi vitae
          consequuntur nam asperiores deleniti sunt ducimus alias incidunt est dolorum nisi laboriosam quasi. Pariatur fugit
          nemo voluptas nulla, iste optio quasi voluptate tenetur in cumque atque tempore, quaerat minima officiis dolore animi
          omnis rerum modi eligendi sit. Error cumque consequatur saepe rerum alias vero aperiam explicabo ut amet.
        </p>
  
        <hr />
  
        {/* La boîte de dialogue */}
        <div id="myDialog" title="Titre de la fenêtre">
          <p className="text-danger">Ceci est un contenu dans une boîte de dialogue. <b>&nbsp;{aa}</b></p>
        </div>
  
        {/* Le bouton pour ouvrir la boîte de dialogue */}
        <p className="text-center">

        <button onClick={openDialog} >Ouvrir la boîte de dialogue</button>
        </p>
      </div>
    );
  };
  
  export default About;