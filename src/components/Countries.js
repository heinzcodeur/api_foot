import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "./Navigation";
import {
  fetchWtaRanking,
  fetchAtpRanking,
  checkBackSlash,
  checkItf,
  fetchRankings,
  fetchMatches
} from "../utils";
import Timer from "./Timer";
import useCustomHook from "./useCustomHook";
import apikeys from "./apiKeys"; // Assurez-vous d'utiliser le bon chemin
import Matchs from "./Matchs";
import Main from "./Main";
import PlayerRanking from "./PlayerRanking";


const Countries = () => {
  const {
    donnees,
    setData,
    active,
    setActive,
    activeButton,
    setActiveButton,
    wtaRanking,
    setWtaRanking,
    atpRanking,
    setAtpRanking,
    limitRequestLeft,
    setLimitRequestLeft,
    limitRankWtaLeft,
    setLimitRankWtaLeft,
    intervalId,
    setIntervalId,
    apiKeyIndex,
    setApiKeyIndex,
    danger,
    setDanger,
    delay,
    setDelay,
    currentApiKey,
    setCurrentApiKey,
    nextIndex,
    setNextIndex,
    tennis_live,
    setTennisLive,
    roi,
    setRoi,
    matchs, 
    setMatchs
  } = useCustomHook(apikeys);

  const fetchData = () => {
    axios
      .get("https://sports-live-scores.p.rapidapi.com/tennis/live", {
        headers: { "X-RapidAPI-Key": currentApiKey },
      })
      .then((res) => {
        setDanger("");
        console.log('cuisine')
        setData(res.data.matches);
        setLimitRequestLeft(res.headers["x-ratelimit-requests-remaining"]);
      })
      .catch((error) => {
        console.warn(error)
        // if (error.response.status === 429) {
        //   const nextIndex = (apiKeyIndex + 1) % apikeys.length;
        //   // alert(nextIndex);
        //   setCurrentApiKey(apikeys[nextIndex]);
        //   setApiKeyIndex(nextIndex); // Mise à jour de l'index ici
        //   setDanger(nextIndex + " " + currentApiKey);
        // }
      });
  };

  const handleButtonClick = (delay) => {
    setDelay(delay); // Mettre à jour le délai
    setActiveButton(delay); // Mettre à jour le bouton actif
    console.log(delay);
  };

  // useEffect(() => {
  //   // Appel de fetchDataOnce une seule fois
  //   fetchAtpRanking();
  // }, []);


const getMatchs = async () => {
  try {
    const res = await fetchMatches('matches.json');
    setData(res);
  } catch (error) {
    console.error('Erreur lors de la récupération des classements:', error);
  }
};

  useEffect(() => {
    const intervalId = setInterval(fetchData, delay);
    return () => clearInterval(intervalId);
  }, [delay]);

  return (
    <div className="bg-dark text-light min-height">
      <Navigation />
      <div className="container border border-primary mx-auto">
        <Timer
          limitRequestLeft={limitRequestLeft}
          activeButton={activeButton}
          danger={danger}
          handleButtonClick={handleButtonClick}
        />
        <div className="row">
      <div className="overflow-auto col-12">
        <table className="table table-striped">
          <thead></thead>
          <tbody className="text-light">
              {donnees ? (
                donnees.length > 0 ? (
                donnees.map((match, index) => (
                  !checkBackSlash(match["Home Player"]) && !checkItf(match["Tournament"]) && (
                    <tr key={index} className="border-bottom">
                      <td className={`large-width-td ${match["Surface"].includes("clay")
                          ? "bg-warning text-light"
                          : match["Surface"] === "Grass"
                            ? "bg-success text-light"
                            : "bg-info text-light"
                        }`}>
                        {match["Tournament"]} - {match["Surface"]}
                      </td>
                      <td>
                        <table>
                          <tbody>
                            <tr>
                              <td>{match["Home Player"] || "N/A"}</td>
                              <td><PlayerRanking playerName={match["Home Player"]} /></td>
                            </tr>
                            <tr>
                              <td>{match["Away Player"] || "N/A"} - </td>
                              <td><PlayerRanking playerName={match["Away Player"]} /></td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      <td>
                        <table>
                          <tbody>
                            <tr>
                              <td className="text-danger">
                                <b>{match["Live Home Odd"]}</b>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-danger">
                                <b>{match["Live Away Odd"]}</b>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      {/* Assuming match properties for sets and scores exist */}
                      <td>
                        <table>
                          <tbody>
                            <tr>
                              <td className="text-success">{match["Sets Player 1"]}</td>
                            </tr>
                            <tr>
                              <td className="text-success">{match["Sets Player 2"]}</td>
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
                      {/* ... Repeat for Set2 and Set3 tables (if applicable) */}
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
                  )
                ))
              ) : (
                <p className="text-danger">Aucune donnée à afficher pour les critères sélectionnés.</p>
              )
            ) : (
              <p className="text-danger">Aucune donnée à afficher pour les critères sélectionnés.</p>
            )}

          </tbody>
        </table>
      </div>
    </div>
        {/* <Matchs donnees={donnees} /> */}
        {/* <Main players={atpRanking}/> */}
      </div>
    </div>
  );
};

export default Countries;
