import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";

const Ranking = () => {
  const apikeys = [
    "61cb8bddf7msh35df4200e00b592p143755jsnf183cbe708b5",
    "be38a0a2c6msh898d50a07d5c391p1e7213jsne241f1052e89",
    "aa3e2fc2f5msh1fb9e7704ed333cp1c64e0jsn411370dcfebf",
    "7a3522b864msh458ad29cbfda53dp191cd6jsn8a9ecb8f7113",
    "50736dc75amsh7f9e578a03cb22ap1ea0e4jsn338832cda913",
    "102585ac4fmsh2631463ec6a8969p1ccd25jsn4b73c4307617",
  ];

  const rank_wta = "https://tennisapi1.p.rapidapi.com/api/tennis/rankings/wta";

  const rank_atp =
    "https://tennisapi1.p.rapidapi.com/api/tennis/rankings/atp/live";

  const [apiKeyIndex, setApiKeyIndex] = useState(0); // Ajout de l'index de la clé API
  const [wtaRanking, setWtaRanking] = useState([]);
  const [atpRanking, setAtpRanking] = useState([]);

  const fetchWtaRanking = () => {
    axios
      .get(rank_wta, {
        headers: {
          //   "X-RapidAPI-Key": "aa3e2fc2f5msh1fb9e7704ed333cp1c64e0jsn411370dcfebf"
          "X-RapidAPI-Key":
            "b44f86de54mshed5740f3fd48de0p1773d7jsn574b9aea4a8b",
        },
      })
      .then((res) => {
        setWtaRanking(res.data.rankings);
        //    console.log(wtaRanking[2]);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  const fetchAtpRanking = () => {
    axios
      .get(rank_atp, {
        headers: {
          // "X-RapidAPI-Key": "aa3e2fc2f5msh1fb9e7704ed333cp1c64e0jsn411370dcfebf"
          "X-RapidAPI-Key": "b44f86de54mshed5740f3fd48de0p1773d7jsn574b9aea4a8b",
        },
      })
      .then((res) => {
        // Trier les données par la propriété 'ranking' en ordre croissant
        const sortedRankings = res.data.rankings.sort((a, b) => a.ranking - b.ranking);
        setAtpRanking(sortedRankings);
      })
      .catch((error) => {
        console.log(error.response.message);
        alert(error.response.data.message);
      });
  };
  

  // Exemple d'utilisation

  const checkInternetConnection = () => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        resolve(true);
      };
      img.onerror = () => {
        reject(false);
      };
      img.src = "https://www.google.com/images/phd/px.gif"; // Utilisez une URL de test, comme l'image 1x1 pixel de Google
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const connected = await checkInternetConnection();
        if (connected) {
          console.log("Connexion Internet établie.");
          fetchWtaRanking();
          fetchAtpRanking();
        } else {
          console.log("Pas de connexion Internet.");
          // Gérer l'absence de connexion Internet ici si nécessaire
        }
      } catch (error) {
        console.error(
          "Erreur lors de la vérification de la connexion Internet :",
          error
        );
      }
    };

    fetchData();
  }, []);

  return (
    <div  className="background-component">
      <Navigation />
      <div className="container">
        <div className="row mt-4">
          <div className="col-6">
            {/* <h1 className="text-primary text-center">Ranking</h1> */}
            {wtaRanking.map((match, index) => (
              <h3 style={{ color: '#7814ff' }}>
                {match["team"]["ranking"]}&nbsp;{match["team"]['name']}&nbsp; /{" "}
                {match["team"]["country"]["name"]}
              </h3>
            ))}
          </div>
          <div className="col-6">
            {atpRanking.map((match, index) => (
              <h3 className="text-secondary">
                {match["ranking"]}&nbsp;{match["rowName"]}&nbsp; /{" "}
                {match["team"]["country"]["name"]}
              </h3>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ranking;
