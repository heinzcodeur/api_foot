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

  const checkBackSlash = (inputString) => {
    const regex = /\//; // Expression régulière pour rechercher le symbole "/"
    return regex.test(inputString); // Vérifie si la chaîne contient "/"
  };

  const [donnees, setData] = useState([]);
  const [wtaRanking, setWtaRanking] = useState([]);
  const [limitRequestLeft, setLimitRequestLeft] = useState(0);
  const [limitRankWtaLeft, setLimitRankWtaLeft] = useState(0);
  const [intervalId, setIntervalId] = useState(1000);
  const [apiKeyIndex, setApiKeyIndex] = useState(0); // Ajout de l'index de la clé API
  const [danger, setDanger] = useState(null);
  const [delay, setDelay] = useState(15000);

  const currentApiKey = apikeys[0];

  const fetchWtaRanking = () => {
    axios
      .get(rank_wta, {
        headers: {
          "X-RapidAPI-Key": currentApiKey,
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

  const fetchData = () => {
    axios
      .get(tennis_live, {
        headers: { "X-RapidAPI-Key": currentApiKey },
      })
      .then((res) => {
        setDanger("");
        setData(res.data.matches);
        console.log(donnees.length);
        setLimitRequestLeft(res.headers["x-ratelimit-requests-remaining"]);
        console.log(limitRequestLeft);
      })
      .catch((error) => {
        if (error.response.status === 429) {
          const nextIndex = (apiKeyIndex + 1) % apikeys.length;
          setApiKeyIndex(nextIndex);
          // alert(apiKeyIndex)
          const newApiKey = apikeys[nextIndex];
          //alert(newApiKey);
          setDanger(
            error.response.data.message +
              "<br> code HTTP: " +
              error.request.status
          );
        }
      });
  };

  useEffect(() => {
    if (wtaRanking.length === 0) {
    fetchWtaRanking();
    }

    fetchData();
    const intervalId = setInterval(fetchData, delay);

    return () => clearInterval(intervalId);
  }, [apiKeyIndex, delay, currentApiKey]);

  return (
    <div>
    <Navigation />
    <div className="container border border-primary mx-auto">
      <div className="row">
        <div className="col-10 mx-auto">
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
              className="btn btn-primary"
              onClick={() => {
                setDelay(300000);
                console.log(delay);
              }}
            >
              time
            </button>
          </p>
          <div className="overflow-auto">
            <table className="table table-striped">
              <thead>
                {/* <tr>
                  <th></th>
                  <th className="text-center">liste des matchs de ce jour</th>
                  <th>&nbsp;&nbsp;&nbsp;</th>
                </tr> */}
              </thead>
  
              <tbody>
                {donnees.map((match, index) =>
                  !checkBackSlash(match["Home Player"]) ? (
                    <tr key={index} className="border-bottom">
                      <td className="large-width-td">
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
                          <td className="text-success">
                            {match["Sets Player 1"]}
                          </td>
                        </tr>
                        <tr>
                          <td className="text-success">
                            {match["Sets Player 2"]}
                          </td>
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
