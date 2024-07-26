import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "./atoms/Navigation";
import '../assets/css/app.css'; // Assurez-vous que le CSS global est importé si nécessaire


const Test = () => {

    const componentStyle = {
        backgroundImage: 'url(../assets/images/tennnis.jpeg)',
        backgroundSize: 'cover', // Optionnel: pour couvrir tout le composant
        backgroundPosition: 'center', // Optionnel: pour centrer l'image
        height: '100vh', // Ajustez selon les besoins
        width: '100%' // Ajustez selon les besoins
      };

  return (
    <div className="background-component">
                            <Navigation />

      <h1 className="text-center">Bienvenue dans mon composant avec un fond personnalisé</h1>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
      <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    </div>
  );
};


export default Test;
