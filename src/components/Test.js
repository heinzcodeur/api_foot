import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "./Navigation";
import '../assets/css/app.css'; // Assurez-vous que le CSS global est importé si nécessaire


const Test = () => {

    const componentStyle = {
        backgroundImage: 'url(../assets/images/tennnis.jpeg)',
        backgroundSize: 'cover', // Optionnel: pour couvrir tout le composant
        backgroundPosition: 'center', // Optionnel: pour centrer l'image
        height: '100vh', // Ajustez selon les besoins
        width: '100%' // Ajustez selon les besoins
      };

      const [matchs, setMatchs] = useState([]); // Initialise avec un tableau vide


      useEffect(() => {
        axios.get("fixtures.json")
          .then((res) => {
            setTimeout(() => {
              setMatchs(res.data.matches.map(m => m.Tournament).filter((tournoi, index, array) => array.indexOf(tournoi) === index)
            ); // Mets à jour l'état
            }, 3000); // Retarde la mise à jour de l'état de 3 secondes
          })
          .catch(error => console.error("Erreur lors de la récupération des matchs", error));
      }, []);
       // [] pour exécuter une seule fois au chargement du composant
    
       // Création d'un tableau qui contient les tournois sans doublons
// const tournoisUniques = tournois.filter((tournoi, index, array) => {
//   // Nous cherchons l'index de la première occurrence de l'élément 'tournoi' dans le tableau 'array'
//   const firstOccurrenceIndex = array.indexOf(tournoi);

//   // Si l'index de la première occurrence est égal à l'index actuel, cela signifie que c'est
//   // la première fois que cet élément 'tournoi' apparaît dans le tableau
//   if (firstOccurrenceIndex === index) {
//       // Dans ce cas, nous incluons l'élément actuel 'tournoi' dans le tableau filtré
//       return true;
//   } else {
//       // Si l'index de la première occurrence n'est pas égal à l'index actuel, cela signifie que
//       // l'élément 'tournoi' est un doublon (il est déjà apparu avant dans le tableau), donc on l'exclut
//       return false;
//   }
// });

// // Affichage du tableau filtré sans doublons
// console.log(tournoisUniques);  // ["Open", "Championship", "Final"]
// Explication détaillée étape par étape :
// .filter() :
// La méthode .filter() parcourt chaque élément du tableau tournois et appelle la fonction callback pour chaque élément.
// Elle renvoie un nouveau tableau qui contient seulement les éléments pour lesquels la fonction callback retourne true.
// Les paramètres de la fonction callback :
// tournoi : L'élément actuel du tableau en cours d'examen.
// index : L'index de l'élément tournoi dans le tableau tournois.
// array : Le tableau original sur lequel .filter() est appliqué, ici tournois.
// .indexOf(tournoi) :
// La méthode .indexOf(tournoi) retourne l'index de la première occurrence de l'élément tournoi dans le tableau array (qui est le tableau original tournois dans ce cas).
// Si l'élément apparaît plusieurs fois, .indexOf() renverra l'index de la première occurrence.
// La condition :
// La condition firstOccurrenceIndex === index vérifie si l'élément actuel (tournoi) est le premier à apparaître dans le tableau.
// Si l'élément tournoi est rencontré pour la première fois (c'est-à-dire que son index est égal à l'index actuel), l'élément est inclus dans le tableau filtré en renvoyant true.
// Si l'élément tournoi a déjà été rencontré à un index antérieur, la condition devient false, et l'élément est exclu du tableau filtré.
// Résultat :
// Le tableau tournoisUniques contiendra uniquement les éléments uniques, c'est-à-dire sans doublons.
// Ainsi, cette version détaillée montre comment fonctionne la vérification de doublons en comparant l'index de l'élément actuel avec l'index de sa première apparition dans le tableau.


  return (
    <div>
      <ul>
  {matchs.length < 1 ? (
    <div className="spinner-container">
      <div className="spinner"></div> {/* Ajout du spinner */}
    </div>
  ) : (
    matchs.map((m, i) => (
      <li key={i}><p>{m}</p></li>
    ))
  )}
</ul>

    </div>
    // <div className="background-component">
    //                         <Navigation />

    //   <h1 className="text-center">Bienvenue dans mon composant avec un fond personnalisé</h1>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    //   <p>lorem Bienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnaliséBienvenue dans mon composant avec un fond personnalisé</p>
    // </div>
  );
};


export default Test;
