import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "./Navigation";
import "../assets/css/app.css"; // Import correct
import Timer from "./Timer";
import PlayerImg from "./PlayerImg";
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

const ApiTennis = () => {
  const [data, setData] = useState(null);
  const [nombre, setNombre] = useState(null);
  const [duty, setDuty] = useState([]);
  // const [tiiti, setTiti/] = useState(null);
  const [filterLive, setFilterLive] = useState(false);
  const [filterAtp, setFilterAtp] = useState(false);
  const [filterWta, setFilterWta] = useState(false);
  const [filterPreview, setFilterPreview] = useState(false);
  const [filterOver, setFilterOver] = useState(false);
  const [filterDemain, setfilterDemain] = useState(false);
  const [tri, setTri] = useState(false);
  const [filteredData, setFilteredData] = useState(null);
  const [wta, setWta] = useState([]); // État pour le filtre 'event_live'
  const [atp, setAtp] = useState([]); // État pour le filtre 'event_live'
  const [delay, setDelay] = useState(5000); // État pour le filtre 'event_live'
  const [activeButton, setActiveButton] = useState(false); // État pour le filtre 'event_live'
  const [tournois, setTournois] = useState([]);
  const [rankings, setRankings] = useState([]); // State to hold combined rankings
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Nouvel état pour gérer le chargement
  const [favorite, setFavorite] = useState(1);
  const [challenger, setChallenger] = useState(2);

  const urlwta =
    "https://api.api-tennis.com/tennis/?method=get_standings&event_type=WTA&APIkey=d1d5e28f7576f2ba4c75e6ed53ddfd7e01f162f10b6b4b25bad23e0104255a06";
  const urlAtp =
    "https://api.api-tennis.com/tennis/?method=get_standings&event_type=ATP&APIkey=d1d5e28f7576f2ba4c75e6ed53ddfd7e01f162f10b6b4b25bad23e0104255a06";

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
    console.log(array.length)
    let string = null;
    let player = null;
    let tournoi = "WTA";
    let ranking = 0;

    if(position === 1){ 
        player = object.event_first_player;
        console.log(player)
    }
    else{ 
        player = object.event_second_player
    }

    console.log(player);
  
    if(checkAtp(object.event_type_type)){
        tournoi ='ATP';
    }

    console.log(tournoi)
    string = get_lastName(player);

    console.log(string);

    const regex = new RegExp(string, 'g');
    
    const foundRankings = array.find((element) => regex.test(element.player));

if (foundRankings) {  // Vérifie que foundRankings n'est pas undefined
    ranking = foundRankings.place;
} else {
    console.log('Player not found');
}

    // }
   
    // return ; // Retourner le rang si trouvé, sinon null
    return ranking; // Retourner le rang si trouvé, sinon null
  };

  // Appel de la fonction pour générer l'URL
  const fetchData = async () => {
    try {
      const [wtaRankings, atpRankings] = await Promise.all([
        getWtaRankings(),
        getAtpRankings(),
      ]);
      //   rankingsCombiner({ wtaRankings, atpRankings, setRankings, setError });
      console.log(atpRankings.length);
      console.log(wtaRankings.length);
      const combinedRankings = [...wtaRankings, ...atpRankings];
      console.log(combinedRankings.length);
      setRankings(combinedRankings);
    //   console.log(getRank(get_lastName("Coco Gauff"), combinedRankings));

      combinedRankings.find((item) => {
        const regex = /Wozniacki/;
        if (regex.test(item.player)) {
          console.log(item);
        }
      });
    } catch (error) {
      console.error("Error fetching rankings:", error);
    }

    const url = GenerateApiUrl();
    axios
      .get(url)
      .then((res) => {
        setData(res.data.result);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  // Fonction pour gérer le changement du filtre 'event_live'
  const handleFilterChange = (e) => {
    const { name, checked } = e.target;

    switch (name) {
      case "live":
        setFilterLive(checked);
        break;
      case "atp":
        setFilterAtp(checked);
        break;
      case "wta":
        setFilterWta(checked);
        break;
      case "preview":
        setFilterPreview(checked);
        break;
      case "over":
        setFilterOver(checked);
        break;
      case "demain":
        setfilterDemain(checked);
        break;
      case "tri":
        setTri(checked);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    let result = null;
    if (data) {
      result = data.filter(
        (item) =>
          !checkItf(item.event_type_type) &&
          !checkBackSlash(item.event_first_player) &&
          !checkGirlsBoys(item.event_type_type)
      );

      result.forEach((item) => {
        item.start_date = createDateFromString(
          item.event_date,
          item.event_time
        );
      });

      result.sort((a, b) => {
        return a.start_date - b.start_date;
      });
      // console.log(result);
    }

    if (result) {
      if (filterLive) {
        result = result.filter((item) => item.event_live === "1");
      }
      if (filterAtp) {
        result = result.filter((item) => checkAtp(item.event_type_type));
        console.log(result.length);
      }
      if (filterWta) {
        result = result.filter((item) => checkWta(item.event_type_type));
        console.log(result.length);
      }
      if (filterPreview) {
        result = result.filter(
          (item) => item.event_live === "0" && item.event_status !== "Finished"
        );
        console.log(result.length);
      }
      if (filterOver) {
        result = result.filter((item) => item.event_status === "Finished");
        console.log(result.length);
      }
      if (filterDemain) {
        result = result.filter((item) => {
          const date1 = createDateFromString(item.event_date, item.event_time);
          const today = new Date();
          today.setHours(23, 59, 59, 999);
          return date1 > today;
        });
        console.log(result);
      }
      if (tri) {
        result.sort((a, b) => {
          return b.start_date - a.start_date;
        });
      }
    } else {
      result = [];
    }

    setFilteredData(result);
  }, [
    data,
    filterLive,
    filterAtp,
    filterWta,
    filterPreview,
    filterDemain,
    tri,
    filterOver,
  ]);

  const handleButtonClick = (delay) => {
    console.log(delay + today());
    setDelay(delay); // Mettre à jour le délai
    setActiveButton(delay); // Mettre à jour le bouton actif
  };

//   useEffect(() => {
//     fetchTournois(setTournois);
//   }, [duty]);

  useEffect(() => {
    const intervalId = setInterval(fetchData, delay);
    return () => clearInterval(intervalId);
  }, [delay]);

  return (
    <div>
      <Timer
        handleButtonClick={handleButtonClick}
        activeButton={activeButton}
      ></Timer>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 text-light text-center">
            <label>
              <input
                type="checkbox"
                name="live"
                checked={filterLive}
                onChange={handleFilterChange}
              />{" "}
              live events
            </label>
            &nbsp;&nbsp;
            <label>
              <input
                type="checkbox"
                name="atp"
                checked={filterAtp}
                onChange={handleFilterChange}
              />{" "}
              ATP events
            </label>
            &nbsp;&nbsp;
            <label>
              <input
                type="checkbox"
                name="wta"
                checked={filterWta}
                onChange={handleFilterChange}
              />{" "}
              WTA events
            </label>
            &nbsp;&nbsp;
            <label>
              <input
                type="checkbox"
                name="preview"
                checked={filterPreview}
                onChange={handleFilterChange}
              />{" "}
              preview events
            </label>
            &nbsp;&nbsp;
            <label>
              <input
                type="checkbox"
                name="over"
                checked={filterOver}
                onChange={handleFilterChange}
              />{" "}
              terminés
            </label>
            &nbsp;&nbsp;
            <label>
              <input
                type="checkbox"
                name="demain"
                checked={filterDemain}
                onChange={handleFilterChange}   
              />{" "}
              demain
            </label>
            &nbsp;&nbsp;
            <label>
              <input
                type="checkbox"
                name="tri"
                checked={tri}
                onChange={handleFilterChange}
              />{" "}
              tri {tri}
            </label>
            &nbsp;&nbsp;
            <b className="text-danger">
              {filteredData ? filteredData.length : 0} matchs
            </b>
          </div>

          <div></div>

            {filteredData === null ? (
              <div className="spinner-container">
                <div className="spinner">toto</div>
              </div>
            ) : (
              filteredData.slice().map((item) => (
                <div
                  key={item.id}
                  className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch mb-4 text-center $`{item.event_live === 1 ? bg-primary}`"
                >
                  <div className="border border-primary pt-2 d-flex flex-column justify-content-between w-100 rounded">
                    <ul className="text-light flex-grow-1 d-flex flex-column justify-content-between list-unstyled">
                        <li></li>
                        <li className="mb-2">
                            <Link to={`/athletes/${item.first_player_key}/${getRank(1,item, rankings)}`}>
                                {item.event_first_player_logo ? (
                                    <PlayerImg src={item.event_first_player_logo} />
                                        ) : (
                                    <i className="fas fa-user rounded-circle"></i>
                                        )}
                            </Link>

                            <span> 
                            {getRank(1,item, rankings)}
                            </span>

                            <span className="ms-2 text-primary m-l-3"> 
                            {shortName(item.event_first_player)}
                             </span>
                            <span> VS </span>

                            <span className="ms-2 text-primary m-l-3"> 
                            {shortName(item.event_second_player)}
                             </span>&nbsp;
                            <span className="ms-2 m-r-3">
                            {getRank(2, item,rankings)}
                           </span>
                            

                            <Link to={`/athletes/${item.second_player_key}/${getRank(2,item, rankings)}`}>
                            {item.event_second_player_logo ? (
                                <PlayerImg src={item.event_second_player_logo} />
                            ) : (
                                <i className="fas fa-user rounded-circle"></i>
                            )}
                            </Link>
                      </li>

                      <li>
                        <p>{item.event_type_type} </p>
                      </li>
                      <li>
                        {item.tournament_round
                          ? item.tournament_round
                          : item.tournament_name}
                      </li>
                      <li>
                        <p>
                          {reverseDate(item.event_date)} - {item.event_time}
                        </p>
                      </li>
                      <li
                        className="text-success animated-item"
                        style={{ transition: "color 0.5s" }}
                      >
                        <b>{item.event_game_result}</b>
                      </li>
                      <li>
                        {item.scores.length > 0 ? (
                          <span>
                            {item.scores[0].score_first} -{" "}
                            {item.scores[0].score_second}
                            {item.scores.length >= 2 && (
                              <b>
                                /{item.scores[1].score_first} -{" "}
                                {item.scores[1].score_second}
                              </b>
                            )}
                            {item.scores.length >= 3 && (
                              <>
                                /{item.scores[2].score_first} -{" "}
                                {item.scores[2].score_second}
                              </>
                            )}
                          </span>
                        ) : (
                          <>na</> // Valeur de repli si aucun score n'existe
                        )}

                        <p className="text-primary">
                          {item.event_final_result}
                        </p>
                        <p>match key: {item.event_key}</p>
                      </li>
                    </ul>
                  </div>
                  <br />
                </div>
              ))
            )}
        </div>
      </div>
    </div>
  );
};

export default ApiTennis;
