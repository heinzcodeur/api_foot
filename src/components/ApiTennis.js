import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "./Navigation";
import "../assets/css/app.css"; // Import correct
import Timer from "./Timer";
import PlayerImg from "./atoms/PlayerImg";
import {
  checkBackSlash,
  fetchTournois,
  reverseDate,
  checkAtp,
  checkGirlsBoys,
  checkItf,
  checkWta,
  today,
  createDateFromString,
  shortName,
  rankingsCombiner,
  get_lastName,
} from "../functions/utils";
import GenerateApiUrl from "./GenerateApiUrl";
import { Link } from "react-router-dom";
import FilterPanel from "./organisms/FilterPanel";
import MatchList from "./Templates/MatchList";
import withApiKey from "./context/withApiKey";

const ApiTennis = ({apiKey}) => {
  const [data, setData] = useState(null);
  const [nombre, setNombre] = useState(null);
  const [duty, setDuty] = useState([]);
  const [wta, setWta] = useState([]); // État pour le filtre 'event_live'
  const [atp, setAtp] = useState([]); // État pour le filtre 'event_live'
  const [delay, setDelay] = useState(15000); // État pour le filtre 'event_live'
  const [filteredData, setFilteredData] = useState(null);
  const [activeButton, setActiveButton] = useState(false); // État pour le filtre 'event_live'
  const [tournois, setTournois] = useState([]);
  const [rankings, setRankings] = useState([]); // State to hold combined rankings
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Nouvel état pour gérer le chargement
  const [favorite, setFavorite] = useState(1);
  const [challenger, setChallenger] = useState(2);

  const [filters, setFilters] = useState({
    live: true,
    atp: false,
    wta: false,
    preview: false,
    over: false,
    demain: false,
    tri: false,
  });

  // const apiKey = process.env.REACT_APP_API_TENNIS_KEY;

console.log("API Tennis Key:", apiKey); // Pour vérifier si la clé est bien récupérée

const urlwta = `https://api.api-tennis.com/tennis/?method=get_standings&event_type=WTA&APIkey=${apiKey}`;
const urlAtp = `https://api.api-tennis.com/tennis/?method=get_standings&event_type=ATP&APIkey=${apiKey}`;


  const getWtaRankings = async () => {
    try {
      const response = await axios.get(urlwta);
      return response.data.result; // Return the fetched WTA rankings data
    } catch (error) {
      console.error("Error fetching WTA rankings:", error);
      // Optionally, handle errors gracefully, e.g., display an error message
      return []; // Return an empty array in case of error
    }
  };

  const getAtpRankings = async () => {
    try {
      const response = await axios.get(urlAtp);
      return response.data.result; // Return the fetched ATP rankings data
    } catch (error) {
      console.error("Error fetching ATP rankings:", error);
      // Optionally, handle errors gracefully, e.g., display an error message
      return []; // Return an empty array in case of error
    }
  };

  const getRank = (position, object, array) => {
    let string = null;
    let player = null;
    let tournoi = "WTA";
    let ranking = 0;

    if (position === 1) {
      player = object.event_first_player;
    }
    else {
      player = object.event_second_player
    }


    if (checkAtp(object.event_type_type)) {
      tournoi = 'ATP';
    }

    // console.log(tournoi)
    string = get_lastName(player);

    // console.log(string);

    const regex = new RegExp(string, 'g');

    const foundRankings = array.find((element) => regex.test(element.player));

    if (foundRankings) {  // Vérifie que foundRankings n'est pas undefined
      ranking = foundRankings.place;
    } else {
      // console.log('Player not found');
    }

    // }

    // return ; // Retourner le rang si trouvé, sinon null
    return ranking; // Retourner le rang si trouvé, sinon null
  };

  // Appel de la fonction pour générer l'URL
  const fetchData = async () => {
    try {
      const wtaRankings = await getWtaRankings();
      // If this line is reached, it means wtaRankings was successful.

      const atpRankings = await getAtpRankings();
      const combinedRankings = [...wtaRankings, ...atpRankings];

      console.log(atpRankings.length);
      console.log(wtaRankings.length);
      console.log(combinedRankings.length);

      setRankings(combinedRankings);

      // Optional: find a specific player
      combinedRankings.find((item) => {
        const regex = /Wozniacki/;
        if (regex.test(item.player)) {
          console.log(item);
        }
      });

    } catch (error) {
      console.error("Error fetching rankings:", error);
      return;  // Stop further execution if any error occurs
    }

    // Generate API URL and fetch additional data, if needed.
    const url = GenerateApiUrl({apiKey : apiKey});
    axios
      .get(url)
      .then((res) => {
        setData(res.data.result);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  const handleButtonClick = (delay) => {
    console.log(delay + today());
    setDelay(delay); // Mettre à jour le délai
    setActiveButton(delay); // Mettre à jour le bouton actif
  };

  useEffect(() => {
    console.log("Setting up interval with delay:", delay);
    const intervalId = setInterval(() => {
      console.log("Fetching data...");
      fetchData();
    }, delay);
  
    return () => {
      console.log("Clearing interval");
      clearInterval(intervalId);
    };
  }, [delay]);
  

  return (
    <div>
      <Timer
        handleButtonClick={handleButtonClick}
        activeButton={activeButton}
      ></Timer>
      
      <div className="container mt-4">
        <div className="row">

          <FilterPanel
            data={data}
            filters={filters}
            setFilters={setFilters}
            setFilteredData={setFilteredData}
          />
          <div></div>

          <MatchList matches={filteredData} reverseDate={reverseDate} getRank={getRank} rankings={rankings} />

        </div>
      </div>
    </div>
  );
};

export default withApiKey(ApiTennis);
