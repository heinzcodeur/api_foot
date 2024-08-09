import React, { useEffect, useState } from "react";
import axios from "axios";
import '../assets/css/app.css'; // Import correct
import Navigation from "../components/Navigation";

const Tennis = () => {
    const componentStyle = {
        backgroundImage: 'url(../assets/images/tennnis.jpeg)',
        backgroundSize: 'cover', // Optionnel: pour couvrir tout le composant
        backgroundPosition: 'center', // Optionnel: pour centrer l'image
        height: '100vh', // Ajustez selon les besoins
        width: '100%' // Ajustez selon les besoins
    };

    const api_key = "b44f86de54mshed5740f3fd48de0p1773d7jsn574b9aea4a8b";
    const url = "https://allsportsapi2.p.rapidapi.com/api/tennis/events/live";

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [countries, setCountries] = useState(null);


    const checkCountryInString = (searchString) => {
        axios.get('https://restcountries.com/v3.1/all')
              .then(res => {
                    setCountries(res.data);
                    for (let country of countries) {
                        if (searchString.toLowerCase().includes(country.name.common.toLowerCase())) {
                            let donn = {
                                countryName: country.name.common,
                                flag: country.flags[0] // L'URL du drapeau
                            };
                            console.log(donn);
                            return true;
                        }
                    }
                    return false;
                })
              .catch(error => {
                console.log(error.response);
              })
    };

    const testApi = () => {
        axios
            .get(url, {
                headers: {
                    "X-RapidAPI-Key": api_key
                },
            })
            .then((res) => {
                // Ajouter un délai avant de définir les données
                setTimeout(() => {
                    setData(res.data);
                    console.log(res);
                }, 2000); // Délai de 2 secondes (2000 millisecondes)
            })
            .catch((error) => {
                setError(error.response);
                console.log(error.response);
            });
    };

    useEffect(() => {
        checkCountryInString('prostejov-czech-republic');
        testApi();
    }, []);

    return (
        <div className="wizard">
            <div className="row">
                <div className="col-8 mx-auto bg-light opak">
                    <span>cool</span>
                    {error && <p>Erreur : {error.message}</p>}
                    {data && data.events ? (
                        data.events.map((match, index) => (
                            <p key={index} className="text-justify"><b>{match.slug} : {match.homeScore.period1}-{match.awayScore.period1}, {match.homeScore.period2}-{match.awayScore.period2}, {match.homeScore.period3}-{match.awayScore.period3}, {match.homeScore.period4}-{match.awayScore.period4}, {match.homeScore.point}-{match.awayScore.point}</b> / <i>{match.tournament.slug}</i></p> // Assurez-vous que chaque élément a une clé unique
                        ))
                    ) : (
                    <div className="spinner-container">
                        <div className="spinner"></div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Tennis;
