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
import Tournaments from "./atoms/Tournaments";
import ErrorZone from "./atoms/ErrorZone";
// import ErrorZone from "./ErrorZone";

const ApiTennis = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [checkListeTournoi, setCheckListeTournoi] = useState(false);
  const [nombre, setNombre] = useState(null);
  const [duty, setDuty] = useState([]);
  const [wta, setWta] = useState([]); // État pour le filtre 'event_live'
  const [atp, setAtp] = useState([]); // État pour le filtre 'event_live'
  const [delay, setDelay] = useState(5000); // État pour le filtre 'event_live'
  const [filteredData, setFilteredData] = useState(null);
  const [activeButton, setActiveButton] = useState(false); // État pour le filtre 'event_live'
  const [tournois, setTournois] = useState([]);
  const [rankings, setRankings] = useState([]); // State to hold combined rankings
  // const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Nouvel état pour gérer le chargement
  const [favorite, setFavorite] = useState(1);
  const [challenger, setChallenger] = useState(2);
  const [tournaments, setTournaments] = useState([]);
  const [showModal, setShowModal] = useState(false);


  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);



  const [filters, setFilters] = useState({
    live: false,
    atp: false,
    wta: false,
    challenger: false,
    itf: false,
    preview: false,
    over: false,
    demain: false,
    tri: false,
  });

  const apiKey = process.env.REACT_APP_TENNIS_KEY;

  const getWtaRankings = async () => {
    const urlwta =
    `https://api.api-tennis.com/tennis/?method=get_standings&event_type=WTA&APIkey=${apiKey}`;
      try {
        const response = await axios.get(urlwta);
        if (response.data.error) {
          setError(true)
          return { error: response.data.error };
        }
        return { result: response.data.result }; // Retourne les données récupérées
      } catch (error) {
        // console.error("Error fetching WTA rankings:", error);
        // Retourne un objet avec le message d'erreur pour un meilleur traitement
        console.log("erreur "+error)
        return { error: error.message || "An unknown error occurred" };
      }
    };
    
    const getAtpRankings = async () => {
      const urlAtp =
      `https://api.api-tennis.com/tennis/?method=get_standings&event_type=ATP&APIkey=${apiKey}`;
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
      if (wtaRankings.error) {
          setError(true)
          console.log(error)
        console.error("Erreur capturée:", wtaRankings.error);
        return;  // Arrêter l'exécution si une erreur est trouvée
      }

    // Récupérer les classements ATP avec gestion des erreurs
        const atpRankings = await getAtpRankings();
        if (atpRankings.error) {
          console.error("Erreur capturée:", atpRankings.error);
          return;  // Arrêter l'exécution si une erreur est trouvée
        }

    // Vérifier que les deux variables sont des tableaux avant d'utiliser le spread
    const validWtaRankings = Array.isArray(wtaRankings) ? wtaRankings : [];
    const validAtpRankings = Array.isArray(atpRankings) ? atpRankings : [];

    // Fusionner les deux tableaux
    const combinedRankings = [...validWtaRankings, ...validAtpRankings];

    // Afficher la longueur des classements
    console.log("ATP Rankings length:", validAtpRankings.length);
    console.log("WTA Rankings length:", validWtaRankings.length);
    console.log("Combined Rankings length:", combinedRankings.length);

    // Mettre à jour l'état avec les classements combinés
    setRankings(combinedRankings);
    

      // Optional: find a specific player
      combinedRankings.find((item) => {
        const regex = /Wozniacki/;
        if (regex.test(item.player)) {
          console.log(item);
        }
      });

    } catch (error) {
      setError(true)
      console.error("Error fetching rankings:", error.message || error);
      setDelay(360000000)
      delay === 360000000 ? setActiveButton(delay) : (() => {})();      return;  // Stop further execution if any error occurs
    }

    // Generate API URL and fetch additional data, if needed.
    const docPath = `${process.env.PUBLIC_URL}/files/fixtures_21_02_25.json`;
    console.log(docPath);
        const url = GenerateApiUrl();
        axios.get(url)
            .then((res) => {
              const data = res.data.result;
              setData(data);
              
      // Récupérer les tournois uniques
      const tournaments = data
        .map((match) => match.tournament_name)
        .filter((value, index, self) => self.indexOf(value) === index);

      setTournaments(tournaments);

      // Afficher les tournois dans la console
      console.log('Tournaments:', tournaments);
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
    console.log(error)
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
      <Timer handleButtonClick={handleButtonClick} activeButton={activeButton}></Timer>
      {error && <ErrorZone />}
      <div className="container mt-4">
        <div className="row">

          <FilterPanel
            data={data}
            filters={filters}
            setFilters={setFilters}
            setFilteredData={setFilteredData}
          />

          {/* liste des tournois */}
          {checkListeTournoi && <Tournaments tournaments={tournaments} />}
          <MatchList matches={filteredData} reverseDate={reverseDate} getRank={getRank} rankings={rankings} />

        </div>
      </div>
    </div>
  );
};

export default ApiTennis;
