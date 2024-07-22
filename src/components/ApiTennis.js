import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "./Navigation";
import '../assets/css/app.css'; // Import correct
import Timer from "./Timer";

const ApiTennis = () => {

    const checkBackSlash = (inputString) => {
        const regex = /\//; // Expression régulière pour rechercher le symbole "/"
        return regex.test(inputString); // Vérifie si la chaîne contient "/"
    };

    const checkItf = (inputString) => {
        const regex = /Itf/; // Expression régulière pour rechercher le symbole "/"
        console.log(regex.test(inputString))
        return regex.test(inputString); // Vérifie si la chaîne contient "/"
    };

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [filterLive, setFilterLive] = useState(false); // État pour le filtre 'event_live'
    const [isDebuted, setIsDebuted] = useState(false); // État pour le filtre 'event_live'
    const [delay, setDelay] = useState(5000); // État pour le filtre 'event_live'
    const [activeButton, setActiveButton] = useState(false); // État pour le filtre 'event_live'
    const [tournois, setTournois] = useState([]);



    const fetchData = () => {
        axios
            .get('https://api.api-tennis.com/tennis/?method=get_fixtures&APIkey=7b2b2c63e9ff413388c8ca25249f24e4efe31b3f38c5cd3e432ea373cd3e710a&date_start=2024-07-21&date_stop=2024-07-22')
            .then((res) => {
                //setDanger("");
                setData(res.data.result);
                //setLimitRequestLeft(res.headers["x-ratelimit-requests-remaining"]);
                // console.log(limitRequestLeft);
            })
            .catch((error) => {
                console.warn(error)
            });
    };

    const fetchTournois = () => {
        axios.get('/tournament.json')
            .then((res) => {
                console.log(res.data);
                setTournois(res.data)
            })
            .catch(error => {
                console.warn(error)
            })
    }

    // Fonction pour gérer le changement du filtre 'event_live'
    const handleFilterChange = (e) => {
        setFilterLive(e.target.checked);
    };

    const handleDebuted = (e) => {
        setIsDebuted(e.target.checked);
    };

    const handleButtonClick = (delay) => {
        setDelay(delay); // Mettre à jour le délai
        setActiveButton(delay); // Mettre à jour le bouton actif
        console.log(delay);
    };

    // Filtrer les données en fonction du filtre 'event_live'
    //   const filteredData = data ? data.filter(item => filterLive ? item.event_live === "1" : true) : null;
    const filteredData = data ? data.filter(function (item) {
        if (filterLive) {
            return item.event_live === "1";
        } else {
            return true;
        }
    }) : null;

    const isDebutedData = data ? data.filter(function (item) {
        if (isDebuted) {
            return item.event_status === "";
        } else {
            return true;
        }
    }) : null;


    useEffect(() => {
        fetchTournois();
    }, [])

    useEffect(() => {

        // Configurer l'intervalle pour appeler fetchTournois toutes les X millisecondes

        const intervalId = setInterval(fetchData, delay);
        return () => clearInterval(intervalId);
    }, [delay]);

    return (
        <div className="wizard">
            <Navigation />
            <Timer
                handleButtonClick={handleButtonClick}
                activeButton={activeButton}
            ></Timer>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12">
                        <label>
                            <input
                                type="checkbox"
                                checked={filterLive}
                                onChange={handleFilterChange}
                            />
                            Show only live events
                        </label>
                    </div>
                    <div className="col-12">
                        <label>
                            <input
                                type="checkbox"
                                checked={isDebuted}
                                onChange={handleDebuted}
                            />
                            Show only not yet debuted events
                        </label>
                    </div>
                    {filteredData === null ? (
                        <p>Loading...</p>
                    ) : (
                        isDebutedData.slice().reverse().map((item) =>
                            !checkItf(item.event_type_type) ? (
                                <div key={item.id} className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch mb-2 text-center">
                                    <div className="border border-primary pt-2 d-flex flex-column justify-content-between w-100">
                                        <ul className="text-light flex-grow-1 d-flex flex-column justify-content-between list-unstyled">
                                            <li className="mb-2">
                                                {item.event_first_player_logo ? (
                                                    <img
                                                        src={item.event_first_player_logo}
                                                        className="rounded-circle"
                                                        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                                    />
                                                ) : (
                                                    <i className="fas fa-user rounded-circle" ></i>
                                                )}

                                                <span className="ms-2 text-primary m-l-3">{item.event_first_player}</span>
                                                <span> VS </span>

                                                <span className="ms-2 text-primary m-r-3">{item.event_second_player}</span>
                                                {item.event_second_player_logo ? (
                                                   <img
                                                   src={item.event_second_player_logo}
                                                   className="rounded-circle"
                                                   style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                                    /> 
                                                ) : (
                                                    <i className="fas fa-user rounded-circle" ></i>
                                                )}
                                                
                                            </li>

                                            <li className="mb-2">

                                            </li>
                                            <li>
                                                <p>{item.event_type_type} </p>
                                            </li>
                                            <li>{item.tournament_round}</li>
                                            <li>
                                                <p>{item.event_date} - {item.event_time}</p>
                                            </li>
                                            <li className="text-primary">
                                                {item.event_game_result}
                                            </li>
                                            <li>
                                                {item.scores[0].score_first} -  {item.scores[0].score_second} /
                                                {item.scores.length > 1 ? (
                                                    <>
                                                        {item.scores[1].score_first} - {item.scores[1].score_second}
                                                    </>
                                                ) : (
                                                    'N/A'  // Valeur de repli si l'élément à l'indice [1] n'existe pas
                                                )}                                            <p className="text-primary">{item.event_final_result}</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <br />
                                </div>
                            ) : null
                        )
                    )}
                </div>
            </div>
        </div>
    );

}

export default ApiTennis;

