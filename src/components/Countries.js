import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "./Navigation";


const Countries = () => {
    const apikeys = [
      "7a3522b864msh458ad29cbfda53dp191cd6jsn8a9ecb8f7113",
      "50736dc75amsh7f9e578a03cb22ap1ea0e4jsn338832cda913",
      "102585ac4fmsh2631463ec6a8969p1ccd25jsn4b73c4307617"
    ];
    const tennis_live = "https://sports-live-scores.p.rapidapi.com/tennis/live";
    const tennis_bis = "https://allsportsapi2.p.rapidapi.com/api/tennis/events/18/7/2023";
  
    const [donnees, setData] = useState([]);
    const [limitRequestLeft, setLimitRequestLeft] = useState(0);
    const [intervalId, setIntervalId] = useState(1000);
    const [apiKey, setApiKey] = useState(apikeys[0]);
    const [danger, setDanger] = useState(null);
    const [delay, setDelay] = useState(1500000);
  
    const fetchData = () => {
      axios
        .get(tennis_live, {
          headers: { "X-RapidAPI-Key": apiKey },
        })
        .then((res) => {
          console.log(limitRequestLeft);
          setData(res.data.matches);
          console.log(donnees);
          setLimitRequestLeft(res.headers['x-ratelimit-requests-remaining']);
        })
        .catch((error) => {
          console.log(error.config.headers['X-RapidAPI-Key']);
          if (error.response.headers['x-ratelimit-requests-remaining'] <= 0) {
            const currentIndex = apikeys.indexOf(apiKey);
            const nextIndex = (currentIndex + 1) % apikeys.length;
            const newApiKey = apikeys[nextIndex];
            console.log(newApiKey);
            setApiKey(newApiKey);
            setDanger(error.response.data.message + '<br> code HTTP: ' + error.request.status);
          }
        });
    };
  
    useEffect(() => {
      fetchData();
  
      const intervalId = setInterval(fetchData, delay);
  
      return () => clearInterval(intervalId);
    }, [apiKey, delay]);

    return (
        <div>
          <Navigation />
          <div className="container">
            <div className="row">
              {danger ? (
                <div className="col-10 alert alert-danger mx-auto">{danger}</div>
              ) : null}
            </div>
          </div>
          <hr />
          <h3 className="text-center">
            Il te reste {limitRequestLeft} appels{" "}
            <button
              className="btn btn-primary"
              onClick={() => {
                clearInterval(intervalId); // D'abord, effacez l'intervalle actuel
                const newIntervalId = setInterval(fetchData, 20000); // Ensuite, créez un nouvel intervalle avec le délai souhaité
                setIntervalId(newIntervalId); // Mettez à jour l'état intervalId avec le nouvel identifiant d'intervalle
              }}
            >
              time
            </button>
          </h3>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>&nbsp;&nbsp;&nbsp;</th>
                <th className="text-center">liste des matchs de ce jour</th>
                <th>&nbsp;&nbsp;&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {donnees.map((match, index) => (
                <tr key={index} className="border-bottom">
                  <td>
                    {match["Tournament"]} - {match["Surface"]}
                  </td>
                  <td>
                    <tr>
                      <td>{match["Home Player"]}</td>
                      <td>
                        <b>{match["Live Home Odd"]}</b>
                      </td>
                      {/* <td><b>{match["Sets Player 1"]}</b></td> */}
                    </tr>
                    <tr>
                      <td>{match["Away Player"]} &nbsp;</td>
                      <td>
                        <b>{match["Live Away Odd"]}</b>
                      </td>
                      {/* <td><b>{match["Sets Player 2"]}</b></td> */}
                    </tr>
                  </td>
                  <td>
                    <tr>
                      <td>{match["Sets Player 1"]}</td>
                    </tr>
                    <tr>
                      <td>{match["Sets Player 2"]}</td>
                    </tr>
                  </td>
                  <td>
                    <tr>
                      <td>{match["Set1 Player 1"]}</td>
                    </tr>
                    <tr>
                      <td>{match["Set1 Player 2"]}</td>
                    </tr>
                  </td>
                  <td>
                    <tr>
                      <td>{match["Set2 Player 1"]}</td>
                    </tr>
                    <tr>
                      <td>{match["Set2 Player 2"]}</td>
                    </tr>
                  </td>
                  <td>
                    <tr>
                      <td>{match["Set3 Player 1"]}</td>
                    </tr>
                    <tr>
                      <td>{match["Set3 Player 2"]}</td>
                    </tr>
                  </td>
                  <td>
                    <tr>
                      <td className="text-success">
                        <b>{match["Player 1 Score"]}</b>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-success">
                        <b>{match["Player 2 Score"]}</b>
                      </td>
                    </tr>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  
    // return (
    //   <div>
    //     {/* ... Votre contenu JSX */}
    //   </div>
    // );
  };
  




/**test*/


// const Countries = () => {
//     const apikeys = [ "7a3522b864msh458ad29cbfda53dp191cd6jsn8a9ecb8f7113",  "50736dc75amsh7f9e578a03cb22ap1ea0e4jsn338832cda913",  "102585ac4fmsh2631463ec6a8969p1ccd25jsn4b73c4307617"];
//     const apikey_first = "7a3522b864msh458ad29cbfda53dp191cd6jsn8a9ecb8f7113";
//     const apikey_second = "50736dc75amsh7f9e578a03cb22ap1ea0e4jsn338832cda913";
//     const apikey_third = "102585ac4fmsh2631463ec6a8969p1ccd25jsn4b73c4307617";
//     const tennis_live = "https://sports-live-scores.p.rapidapi.com/tennis/live";
//     const tennis_bis = "https://allsportsapi2.p.rapidapi.com/api/tennis/events/18/7/2023";
//     // const delay = 1500;

//     const [donnees, setData] = useState([]);
//     // const [list_matchs, setListMatchs] = useState([]);
//     const [limitRequestLeft, setLimitRequestLeft] = useState(0); // Utilisation de useState pour gérer limitRequestLeft
//     const [intervalId, setIntervalId]= useState(1000);
//     const [apiKey, setApiKey] = useState(apikey_first); // Initialisez avec la clé d'API par défaut
//     const [danger, setDanger] = useState(null); 
//     const [delay, setDelay] = useState(1500); 

//   useEffect(() => {
//     const fetchData = () => {
//       axios.get(tennis_live, {
//         headers: { "X-RapidAPI-Key": apiKey}, // Utilisez la clé d'API actuelle
//       })
//       .then((res) => {
//         // Mise à jour de la variable limit_request_left avec le nombre d'appels restants
//         console.log(limitRequestLeft);

//         // Mise à jour de l'état 'donnees' avec la réponse de l'API
//         setData(res.data.matches);
//         console.log(donnees);
//         setLimitRequestLeft(res.headers['x-ratelimit-requests-remaining']);
//       })
//       .catch((error) => {
//         console.log(error.config.headers['X-RapidAPI-Key']);
//         if (error.response.headers['x-ratelimit-requests-remaining'] <= 0) {
//           // Vous avez atteint la limite des requêtes, alors mettez à jour la clé d'API
//           // Utilisez un index pour obtenir la prochaine clé d'API du tableau apikeys
//           const currentIndex = apikeys.indexOf(apiKey);
//           const nextIndex = (currentIndex + 1) % apikeys.length;
//           const newApiKey = apikeys[nextIndex];
//           console.log(newApiKey)
//           setApiKey(newApiKey);
     
//           // Vous pouvez également stocker la nouvelle clé d'API dans le localStorage ou ailleurs
//           setDanger(error.response.data.message + '<br> code HTTP: ' + error.request.status);
//           // alert('Fournissez une nouvelle clé d\'API');
//         }
//      });
     
//     };

//     const pause = a => { a = 1; return a++; }
//     //const testInter = console.log(pause);
//     // Appelez fetchData immédiatement lors du montage du composant
//     //fetchData();

//     // Utilisez setInterval pour appeler fetchData chaque minute (60000 millisecondes)
//     const intervalId = setInterval(fetchData, delay);

//     // Retournez une fonction de nettoyage pour annuler l'intervalle lors du démontage du composant
//     return () => clearInterval(intervalId);
//   }, [apiKey]); // Incluez apiKey dans les dépendances pour que useEffect se réexécute lorsque la clé d'API change



//     return (
//       <div>
//         <Navigation />
//         <div className="container">
//           <div className="row">
//             {danger ? (
//               <div className="col-10 alert alert-danger mx-auto">{danger}</div>
//             ) : null}
//           </div>
//         </div>
//         <hr />
//         <h3 className="text-center">
//           Il te reste {limitRequestLeft} appels{" "}
//           <button
//             className="btn btn-primary"
//             onClick={() => {
//               clearInterval(intervalId); // D'abord, effacez l'intervalle actuel
//               const newIntervalId = setInterval(fetchData, 20000); // Ensuite, créez un nouvel intervalle avec le délai souhaité
//               setIntervalId(newIntervalId); // Mettez à jour l'état intervalId avec le nouvel identifiant d'intervalle
//             }}
//           >
//             time
//           </button>
//         </h3>
//         <table className="table table-striped">
//           <thead>
//             <tr>
//               <th>&nbsp;&nbsp;&nbsp;</th>
//               <th className="text-center">liste des matchs de ce jour</th>
//               <th>&nbsp;&nbsp;&nbsp;</th>
//             </tr>
//           </thead>
//           <tbody>
//             {donnees.map((match, index) => (
//               <tr key={index} className="border-bottom">
//                 <td>
//                   {match["Tournament"]} - {match["Surface"]}
//                 </td>
//                 <td>
//                   <tr>
//                     <td>{match["Home Player"]}</td>
//                     <td>
//                       <b>{match["Live Home Odd"]}</b>
//                     </td>
//                     {/* <td><b>{match["Sets Player 1"]}</b></td> */}
//                   </tr>
//                   <tr>
//                     <td>{match["Away Player"]} &nbsp;</td>
//                     <td>
//                       <b>{match["Live Away Odd"]}</b>
//                     </td>
//                     {/* <td><b>{match["Sets Player 2"]}</b></td> */}
//                   </tr>
//                 </td>
//                 <td>
//                   <tr>
//                     <td>{match["Sets Player 1"]}</td>
//                   </tr>
//                   <tr>
//                     <td>{match["Sets Player 2"]}</td>
//                   </tr>
//                 </td>
//                 <td>
//                   <tr>
//                     <td>{match["Set1 Player 1"]}</td>
//                   </tr>
//                   <tr>
//                     <td>{match["Set1 Player 2"]}</td>
//                   </tr>
//                 </td>
//                 <td>
//                   <tr>
//                     <td>{match["Set2 Player 1"]}</td>
//                   </tr>
//                   <tr>
//                     <td>{match["Set2 Player 2"]}</td>
//                   </tr>
//                 </td>
//                 <td>
//                   <tr>
//                     <td>{match["Set3 Player 1"]}</td>
//                   </tr>
//                   <tr>
//                     <td>{match["Set3 Player 2"]}</td>
//                   </tr>
//                 </td>
//                 <td>
//                   <tr>
//                     <td className="text-success">
//                       <b>{match["Player 1 Score"]}</b>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="text-success">
//                       <b>{match["Player 2 Score"]}</b>
//                     </td>
//                   </tr>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
// };



export default Countries;
