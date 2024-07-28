import { useState } from "react";

const useCustomHook = (apikeys) => {
  const [donnees, setData] = useState([]);
  const [matchs, setMatchs] = useState([]);
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
  const [roi, setRoi] = useState(1560);
  const [tennis_live, setTennisLive] = useState("https://sports-live-scores.p.rapidapi.com/tennis/live");
  const [currentApiKey, setCurrentApiKey] = useState(apikeys[6]);
  const [nextIndex, setNextIndex] = useState(
    (apiKeyIndex + 1) % apikeys.length
  );

  return {
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
    roi,
    setRoi,
    matchs, 
    setMatchs
  };
};

export default useCustomHook;
