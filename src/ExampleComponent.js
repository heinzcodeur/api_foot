import React, { useEffect } from "react";
import { Logger } from "./logger";

const ExampleComponent = () => {
  useEffect(() => {
    try {
      // Simule une erreur
      throw new Error("Quelque chose s'est mal passé !");
    } catch (err) {
      Logger.error("Erreur dans useEffect", err);
    }
  }, []);

  return <div>Composant Exemple</div>;
};

export default ExampleComponent;