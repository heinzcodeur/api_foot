import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "./Navigation";
import '../assets/css/app.css'; // Import correct
import Timer from "./Timer";
import PlayerImg from "./PlayerImg";
import { checkBackSlash, fetchTournois, reverseDate, checkAtp, checkGirlsBoys, checkItf, checkWta, today } from "../functions/utils";
import GenerateApiUrl from "./GenerateApiUrl";

const ApiTennis = () => {

    const [data, setData] = useState(null);
    const [nombre, setNombre] = useState(null);
    const [duty, setDuty] = useState([]);
    // const [tiiti, setTiti/] = useState(null);
    const [error, setError] = useState(null);
    const [filterLive, setFilterLive] = useState(false);
    const [filterAtp, setFilterAtp] = useState(false);
    const [filterWta, setFilterWta] = useState(false);
    const [filteredData, setFilteredData] = useState([]);
    const [wta, setWta] = useState(false); // État pour le filtre 'event_live'
    const [delay, setDelay] = useState(5000); // État pour le filtre 'event_live'
    const [activeButton, setActiveButton] = useState(false); // État pour le filtre 'event_live'
    const [tournois, setTournois] = useState([]);

    

     
      // Appel de la fonction pour générer l'URL
    const fetchData = () => {
        const url = GenerateApiUrl();
        axios
            .get(url)
            .then((res) => {
                //setDanger("");
                setData(res.data.result);
            })
            .catch((error) => {
                console.warn(error)
            });
    };

    // Fonction pour gérer le changement du filtre 'event_live'
    const handleFilterChange = (e) => {
        const { name, checked } = e.target;

        switch (name) {
            case 'live':
                setFilterLive(checked);
                break;
            case 'atp':
                setFilterAtp(checked);
                break;
            case 'wta':
                setFilterWta(checked);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        let result = null;
        if (data) {
            result = data.filter(item => !checkItf(item.event_type_type) && !checkBackSlash(item.event_first_player) && !checkGirlsBoys(item.event_type_type));
        }

        if (data) {
            if (filterLive) {
                result = result.filter(item => item.event_live === "1");
            }
            if (filterAtp) {
                result = result.filter(item => checkAtp(item.event_type_type));
                console.log(result.length)
            }
            if (filterWta) {
                result = result.filter(item => checkWta(item.event_type_type));
                console.log(result.length)
            }
        } else {
            result = [];
        }

        setFilteredData(result);
    }, [data, filterLive, filterAtp, filterWta]);

    
    const handleButtonClick = (delay) => {
        console.log(delay + today())
        setDelay(delay); // Mettre à jour le délai
        setActiveButton(delay); // Mettre à jour le bouton actif
    };

    useEffect(() => {
        fetchTournois(setTournois);
    }, [duty])

    useEffect(() => {
        // console.log('nouveau rendu')
        const intervalId = setInterval(fetchData, delay);
        return () => clearInterval(intervalId);
    }, [delay]);

    return (
        <div className="wizard">
            <Navigation />
            <Timer handleButtonClick={handleButtonClick} activeButton={activeButton} ></Timer>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12">
                        <label>
                            <input
                                type="checkbox"
                                name="live"
                                checked={filterLive}
                                onChange={handleFilterChange}
                            />                            live events
                        </label>
                        &nbsp;
                        <label>
                            <input
                                type="checkbox"
                                name="atp"
                                checked={filterAtp}
                                onChange={handleFilterChange}
                            />                            ATP events
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="wta"
                                checked={filterWta}
                                onChange={handleFilterChange}
                            />                            WTA events
                        </label>&nbsp;&nbsp;
                        <b className="text-danger">{filteredData ? filteredData.length : 0}</b>
                    </div>

                    {filteredData === null ? (
                        <p>Loading...</p>
                    ) : (
                        filteredData.slice().reverse().map((item) =>
                            <div key={item.id} className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch mb-2 text-center $`{item.event_live === 1 ? bg-primary}`">
                                <div className="border border-primary pt-2 d-flex flex-column justify-content-between w-100">
                                    <ul className="text-light flex-grow-1 d-flex flex-column justify-content-between list-unstyled">
                                        <li></li>
                                        <li className="mb-2">
                                            {item.event_first_player_logo ? (
                                                <PlayerImg src={item.event_first_player_logo} />
                                            ) : (
                                                <i className="fas fa-user rounded-circle" ></i>
                                            )}

                                            <span className="ms-2 text-primary m-l-3">{item.event_first_player}</span>
                                            <span> VS </span>

                                            <span className="ms-2 text-primary m-r-3">{item.event_second_player}</span>
                                            {item.event_second_player_logo ? (
                                                <PlayerImg src={item.event_second_player_logo} />
                                            ) : (
                                                <i className="fas fa-user rounded-circle" ></i>
                                            )}

                                        </li>
                                        <li>
                                            <p>{item.event_type_type} </p>
                                        </li>
                                        <li>{item.tournament_round ? item.tournament_round : item.tournament_name}</li>
                                        <li>
                                            <p>{reverseDate(item.event_date)} - {item.event_time}</p>
                                        </li>
                                        <li className="text-success animated-item" style={{ transition: 'color 0.5s' }}>
                                            <b>{item.event_game_result}</b>
                                        </li>
                                        <li>
                                            {item.scores.length > 0 ? (
                                                <span>
                                                    {item.scores[0].score_first} - {item.scores[0].score_second} 
                                                    {item.scores.length >= 2 && (
                                                        <b>
                                                            /{item.scores[1].score_first} - {item.scores[1].score_second} 
                                                        </b>
                                                    )}
                                                    {item.scores.length >= 3 && (
                                                        <>
                                                            /{item.scores[2].score_first} - {item.scores[2].score_second}
                                                        </>
                                                    )}
                                                </span>
                                            ) : (
                                                <>na</> // Valeur de repli si aucun score n'existe
                                            )}

                                            <p className="text-primary">{item.event_final_result}</p>
                                            <p>match key: {item.event_key}</p>
                                        </li>
                                    </ul>
                                </div>
                                <br />
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );

}

export default ApiTennis;

