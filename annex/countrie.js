import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "./Navigation";

const Countries = () => {
  const apikey_first = "7a3522b864msh458ad29cbfda53dp191cd6jsn8a9ecb8f7113";
  const tennis_live = "https://sports-live-scores.p.rapidapi.com/tennis/live";
  let limit_request_left = "titi"; // Vous pouvez initialiser cette variable avec n'importe quelle valeur pour le moment
  // let match_test; // Inutile, cette variable n'est pas utilisée dans le code

  const [donnees, setData] = useState([]);
  const [list_matchs, setListMatchs] = useState([]);

  useEffect(() => {
    axios.get(tennis_live, {
      headers: { "X-RapidAPI-Key": apikey_first },
    })
    .then((res) => {
      // Mise à jour de la variable limit_request_left avec le nombre d'appels restants
      limit_request_left = res.headers['x-ratelimit-requests-remaining'];
      console.log(limit_request_left);

      // Mise à jour de l'état 'donnees' avec la réponse de l'API
      setData(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []); // Les crochets vides signifient que le useEffect s'exécute seulement une fois au montage du composant

  useEffect(() => {
    // Mettre à jour l'état 'list_matchs' lorsque 'donnees' change
    setListMatchs(donnees.matches);
  }, [donnees]); // Le useEffect se déclenche lorsque 'donnees' change

//   return (
//     <div>
//       <Navigation />
//       <hr />
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>&nbsp;&nbsp;&nbsp;</th>
//             <th className="text-center">liste des matchs de ce jour</th>
//             <th>&nbsp;&nbsp;&nbsp;</th>
//           </tr>
//         </thead>
//         <tbody>
//           {list_matchs.matches.map((match, index) => (
//             <tr key={index} className="border-bottom">
//               <td>&nbsp;</td>
//               <td>
//                 <table>
//                   <tbody>
//                     <tr>
//                       <td>{match["Home Player"]}</td>
//                       <td>{match["Away Player"]}</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </td>
//               <td>&nbsp;</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
};

export default Countries;
