import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "./Navigation";

const Countries = () => {
  const apikeys = [
    "61cb8bddf7msh35df4200e00b592p143755jsnf183cbe708b5",
    "be38a0a2c6msh898d50a07d5c391p1e7213jsne241f1052e89",
    "aa3e2fc2f5msh1fb9e7704ed333cp1c64e0jsn411370dcfebf",
    "7a3522b864msh458ad29cbfda53dp191cd6jsn8a9ecb8f7113",
    "50736dc75amsh7f9e578a03cb22ap1ea0e4jsn338832cda913",
    "102585ac4fmsh2631463ec6a8969p1ccd25jsn4b73c4307617",
  ];
  const tennis_live = "https://sports-live-scores.p.rapidapi.com/tennis/live";
  //const tennis_bis = "https://allsportsapi2.p.rapidapi.com/api/tennis/events/18/7/2023";

  const rank_wta =
    "https://sports-live-scores.p.rapidapi.com/tennis/rankings/wta/500";

  const rank_atp =
    "https://tennisapi1.p.rapidapi.com/api/tennis/rankings/atp/live";

  const checkBackSlash = (inputString) => {
    const regex = /\//; // Expression régulière pour rechercher le symbole "/"
    return regex.test(inputString); // Vérifie si la chaîne contient "/"
  };
  const checkItf = (inputString) => {
    const regex = /ITF/; // Expression régulière pour rechercher le symbole "/"
    return regex.test(inputString); // Vérifie si la chaîne contient "/"
  };

  const [donnees, setData] = useState([]);
  const [active, setActive] = useState(null);
  const [activeButton, setActiveButton] = useState(null);
  const [wtaRanking, setWtaRanking] = useState([]);
  const [atpRanking, setAtpRanking] = useState([]);
  const [limitRequestLeft, setLimitRequestLeft] = useState(0);
  const [limitRankWtaLeft, setLimitRankWtaLeft] = useState(0);
  const [intervalId, setIntervalId] = useState(1000);
  const [apiKeyIndex, setApiKeyIndex] = useState(0); // Ajout de l'index de la clé API
  const [danger, setDanger] = useState(null);
  const [delay, setDelay] = useState(5000);
  const [currentApiKey, setCurrentApiKey] = useState(apikeys[0]);
  const [nextIndex, setNextIndex] = useState(
    (apiKeyIndex + 1) % apikeys.length
  );

  const fetchWtaRanking = () => {
    axios
      .get(rank_wta, {
        headers: {
          "X-RapidAPI-Key": apiKeyIndex,
        },
      })
      .then((res) => {
        console.log(limitRequestLeft);
        setWtaRanking(res.data.rankings);
        console.log(wtaRanking[2]);
        setLimitRankWtaLeft(res.headers["x-ratelimit-requests-remaining"]);
        console.log(limitRankWtaLeft);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const fetchAtpRanking = () => {
    axios
      .get(rank_atp, {
        headers: {
          // "X-RapidAPI-Key":
            // "aa3e2fc2f5msh1fb9e7704ed333cp1c64e0jsn411370dcfebf",
          "X-RapidAPI-Key": "b44f86de54mshed5740f3fd48de0p1773d7jsn574b9aea4a8b",
        },
      })
      .then((res) => {
        setAtpRanking(res.data.rankings);
        console.log(atpRanking);
      })
      .catch((error) => {
        console.log(error.response.message);
        alert(error.response.data.message);
      });
  };

  useEffect(() => {
    // Appel de fetchDataOnce une seule fois
    fetchAtpRanking();
  }, []);

  const fetchData = () => {
    axios
      .get(tennis_live, {
        headers: { "X-RapidAPI-Key": currentApiKey },
      })
      .then((res) => {
        setDanger("");
        setData(res.data.matches);
        setLimitRequestLeft(res.headers["x-ratelimit-requests-remaining"]);
        // console.log(limitRequestLeft);
      })
      .catch((error) => {
        if (error.response.status === 429) {
          const nextIndex = (apiKeyIndex + 1) % apikeys.length;
          alert(nextIndex);
          setCurrentApiKey(apikeys[nextIndex]);
          setApiKeyIndex(nextIndex); // Mise à jour de l'index ici
          setDanger(nextIndex + " " + currentApiKey);
        }
      });
  };

  const getPlayerRanking = (playerName) => {
    // Recherche du joueur dans l'array atpRanking
    const player = atpRanking.find((item) => item.team.name === playerName);
    // Si le joueur est trouvé, retourner son ranking, sinon retourner null
    return player ? player.team.ranking : null;
  };

  const handleButtonClick = (delay) => {
    setDelay(delay); // Mettre à jour le délai
    setActiveButton(delay); // Mettre à jour le bouton actif
    //console.log(delay);
  };

  // useEffect(() => {
  //   // Appel de fetchDataOnce une seule fois
  //   fetchAtpRanking();
  // }, []);

  useEffect(() => {
    const intervalId = setInterval(fetchData, delay);

    return () => clearInterval(intervalId);
  }, [apiKeyIndex, delay, currentApiKey]);

  return (
    <div className="wizard">
      <Navigation />
      <div className="container border border-primary mx-auto">
        <div className="row">
          <div className="col-12 mx-auto">
            <div>
              {danger ? (
                <div className="col-10 alert alert-danger mx-auto">
                  {danger}
                </div>
              ) : null}
            </div>
            <h3 className="text-center text-success">
              Il te reste {limitRequestLeft} appels{" "}
            </h3>

            <p className="text-center">
              <button
                onClick={() => handleButtonClick(360000000)}
                className={`btn ${
                  activeButton === 360000000 ? "btn-danger" : "btn-primary"
                }`}
              >
                stop
              </button>
              &nbsp;
              <button
                onClick={() => handleButtonClick(36000000)}
                className={`btn ${
                  activeButton === 36000000 ? "btn-danger" : "btn-primary"
                }`}
              >
                1h
              </button>
              &nbsp;
              <button
                onClick={() => handleButtonClick(30000)}
                className={`btn ${
                  activeButton === 60000 ? "btn-danger" : "btn-primary"
                }`}
              >
                30s
              </button>
              &nbsp;
              <button
                onClick={() => handleButtonClick(5000)}
                className={`btn ${
                  activeButton === 5000 ? "btn-danger" : "btn-primary"
                }`}
              >
                5 s
              </button>
            </p>

            <div className="overflow-auto">
              <table className="table table-striped">
                <thead></thead>
                <tbody>
                  {donnees.map((match, index) =>
                    !checkBackSlash(match["Home Player"]) ? (
                      !checkItf(match["Tournament"]) ? (
                        <tr key={index} className="border-bottom text-light">
                          <td className="large-width-td ">
                            {match["Tournament"]} - {match["Surface"]}
                          </td>
                          <td>
                            <table>
                              <tbody>
                                <tr>
                                  <td>{match["Home Player"]} - </td>
                                  <td>{getPlayerRanking(match["Home Player"]) ||  52}</td>
                                  {/* <tr>
                                    <td><b>{match["Live Home Odd"]}</b></td>
                                  </tr> */}
                                </tr>
                                  
                                <tr>
                                  <td>{match["Away Player"]} - </td>
                                  <td>{getPlayerRanking(match["Away Player"]) ||  52}</td>
                                  {/* <tr><td>
                                      <b>{match["Live Away Odd"]}</b>
                                    </td>
                                  </tr> */}
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td>
                          <table>
                              <tbody>
                                <tr>
                                  <td className="text-danger">
                                  <b>{match["Live Home Odd"]}</b>                                  </td>
                                </tr>
                                <tr>
                                  <td className="text-danger">
                                  <b>{match["Live Away Odd"]}</b>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td>
                            <table>
                              <tbody>
                                <tr>
                                  <td className="text-success">
                                    {match["Sets Player 1"]}
                                  </td>
                                </tr>
                                <tr>
                                  <td className="text-success">
                                    {match["Sets Player 2"]}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td>
                            <table>
                              <tbody>
                                <tr>
                                  <td>{match["Set1 Player 1"]}</td>
                                </tr>
                                <tr>
                                  <td>{match["Set1 Player 2"]}</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td>
                            <table>
                              <tbody>
                                <tr>
                                  <td>{match["Set2 Player 1"]}</td>
                                </tr>
                                <tr>
                                  <td>{match["Set2 Player 2"]}</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td>
                            <table>
                              <tbody>
                                <tr>
                                  <td>{match["Set3 Player 1"]}</td>
                                </tr>
                                <tr>
                                  <td>{match["Set3 Player 2"]}</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td>
                            <table>
                              <tbody>
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
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      ) : null
                    ) : null
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countries;
