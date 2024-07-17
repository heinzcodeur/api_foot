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
    
  } = useCustomHook(apikeys);

  const fetchData = () => {
    axios
    .get(tennis_live, {
      headers: { "X-RapidAPI-Key": currentApiKey },
    })
    .then((res) => {
      setDanger("");
      setData(res.data.matches);
      setLimitRequestLeft(res.headers["x-ratelimit-requests-remaining"]);
    })
    .catch(error => {
        console.log(error.message)
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
  }, []);

  return (
    <div>
      <Navigation />
      <div className="container border border-primary mx-auto">
        <Timer
          limitRequestLeft={limitRequestLeft}
          activeButton={activeButton}
          danger={danger}
          handleButtonClick={handleButtonClick}
        />
        <Matchs donnees={donnees} />
        <Main players={atpRanking}/>
      </div>
    </div>
  );
};

export default Countries;
