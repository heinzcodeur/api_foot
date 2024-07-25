import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "./Navigation";
import '../assets/css/app.css'; // Import correct
import Timer from "./Timer";
import PlayerImg from "./PlayerImg";
import { checkBackSlash, fetchTournois, reverseDate, checkAtp, checkGirlsBoys, checkItf, checkWta, today, createDateFromString, handleFilterChange } from "../functions/utils";
import GenerateApiUrl from "./GenerateApiUrl";
import Filter from "./Filter";
import Main from "./Main";

const ApiTennis = () => {

    const [data, setData] = useState(null);
    const [nombre, setNombre] = useState(null);
    const [duty, setDuty] = useState([]);
    const [error, setError] = useState(null);
    // const [filterLive, setFilterLive] = useState(false);
    // const [preview, setPreview] = useState(false);
    // const [filterAtp, setFilterAtp] = useState(false);
    // const [filterWta, setFilterWta] = useState(false);
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
    

   

    
    const handleButtonClick = (delay) => {
        console.log(delay + today())
        setDelay(delay); // Mettre à jour le délai
        setActiveButton(delay); // Mettre à jour le bouton actif
    };

    useEffect(() => {
        fetchTournois(setTournois);
    }, [duty])

    useEffect(() => {
        const intervalId = setInterval(fetchData, delay);
        return () => clearInterval(intervalId);
    }, [delay]);

    return (
        <div className="wizard">
            <Navigation />
            <Timer handleButtonClick={handleButtonClick} activeButton={activeButton} ></Timer>
            <Main data />  
        </div>
    );

}

export default ApiTennis;

