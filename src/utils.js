// functions.js

import axios from "axios";
const atp_url = "atpRanking.json";
const wta_url = "wtaRanking.json";
const rank_wta =
  "https://sports-live-scores.p.rapidapi.com/tennis/rankings/wta/500";

const rank_atp =
  "https://tennisapi1.p.rapidapi.com/api/tennis/rankings/atp/live";

const getLastname = (string) => {
  const tab = string.split(" ");
  const lastname = tab[1];
  return lastname;
};

const getFirstname = (string) => {
  const tab = string.split(" ");
  const firstname = tab[0];
  return firstname;
};

const fetchWtaRanking = (apiKeyIndex, setWtaRanking, setLimitRankWtaLeft) => {
  axios
    .get(rank_wta, {
      headers: {
        "X-RapidAPI-Key": apiKeyIndex,
      },
    })
    .then((res) => {
      setWtaRanking(res.data.rankings);
      setLimitRankWtaLeft(res.headers["x-ratelimit-requests-remaining"]);
    })
    .catch((error) => {
      console.log(error.response);
    });
};

const fetchAtpRanking = (apiKey, setAtpRanking) => {
  axios
    .get(rank_atp, {
      headers: {
        "X-RapidAPI-Key": apiKey,
      },
    })
    .then((res) => {
      setAtpRanking(res.data.rankings);
    })
    .catch((error) => {
      console.log(error.response.message);
      alert(error.response.data.message);
    });
};

const checkBackSlash = (inputString) => {
  const regex = /\//; // Expression régulière pour rechercher le symbole "/"
  return regex.test(inputString); // Vérifie si la chaîne contient "/"
};

const checkItf = (inputString) => {
  const regex = /ITF/; // Expression régulière pour rechercher le symbole "/"
  return regex.test(inputString); // Vérifie si la chaîne contient "/"
};

const fetchRankings = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.rankings;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error; // Rethrow the error so the calling function can handle it if needed
  }
};

const atp = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.rankings;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error; 
  }
};

const fetchMatches = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    let tab = [];
    data.matches.forEach(d => {
      if(!checkBackSlash(d["Home Player"])){
        tab.push(d)
      }
    });
    return tab;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error; // Rethrow the error so the calling function can handle it if needed
  }
};

const fetchLatpRankings = async () => {
  try {
    const rankings = await fetchRankings("atpRanking.json");
    // setAtpRanking(rankings);
  } catch (error) {
    console.error("une erreur est survenue");
  }
};

const normalizeString = input  => {
   input.normalize("NFD")  // Normalisation en forme décomposée
      .replace(/[\u0300-\u036f]/g, "")  // Suppression des diacritiques
      .toLowerCase();  // Conversion en minuscules
      return input;
}

const convertUnicodeToAscii = (input) => {
  // Normaliser la chaîne pour gérer les caractères Unicode
  const normalized = input.normalize();

  // Remplacer les caractères spécifiques par leurs équivalents en ASCII
  const ascii = normalized
      .replace(/\u010d/g, 'c')   // Remplacer č par c
      .replace(/\u00ed/g, 'i')   // Remplacer í par i
      .replace(/\u00e1/g, 'a');  // Remplacer á par a

  return ascii;
}

const getPlayerRanking = async (playerName) => {
   console.log(convertUnicodeToAscii(playerName));

  try {
    const atp_rank = await fetchRankings('atpRanking.json');
    const wta_rank = await fetchRankings('wtaRanking.json');
    
    let player = atp_rank.find((item) => getFirstname(normalizeString(item.team.name)) === getFirstname(playerName));
    if (!player) {
      // console.log(getLastname(playerName));
      player = wta_rank.find((item) => getLastname(item.name) === convertUnicodeToAscii(getFirstname(playerName)));
    }
    return player ? player.ranking : 0;
  } catch (error) {
    console.error("Error getting player ranking: ", error);
    throw error;
  }
};


export {
  getLastname,
  getFirstname,
  fetchWtaRanking,
  fetchAtpRanking,
  checkBackSlash,
  checkItf,
  fetchRankings,
  fetchMatches,
  getPlayerRanking,
  normalizeString
};
