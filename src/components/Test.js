import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "./Navigation";

const Test = () => {
    const apikey_first = "50736dc75amsh7f9e578a03cb22ap1ea0e4jsn338832cda913";
    const apikey_second = "7a3522b864msh458ad29cbfda53dp191cd6jsn8a9ecb8f7113";
    const tennis_live = "https://sports-live-scores.p.rapidapi.com/tennis/live";
    const tennis_bis = "https://allsportsapi2.p.rapidapi.com/api/tennis/events/18/7/2023";

    const [donnees, setData] = useState([]);
    // const [list_matchs, setListMatchs] = useState([]);
    const [limitRequestLeft, setLimitRequestLeft] = useState(0); // Utilisation de useState pour gérer limitRequestLeft


    useEffect(() => {
        axios.get(tennis_bis, {
            headers: { "X-RapidAPI-Key": apikey_first },
        })
            .then((res) => {
                // Mise à jour de la variable limit_request_left avec le nombre d'appels restants
                console.log(limitRequestLeft);

                // Mise à jour de l'état 'donnees' avec la réponse de l'API
                setData(res);
                setLimitRequestLeft(res.headers['x-ratelimit-requests-remaining']);                
            })
            .catch((error) => {
                console.log(error);
            });
    }, []); // Les crochets vides signifient que le useEffect s'exécute seulement une fois au montage du composant

    return (
        <div>
            <Navigation />

        </div>
    );
}

export default Test;