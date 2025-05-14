import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import { calculateAge } from "../functions/mixins";

const Athlete = () => {
  const { athleteId } = useParams(); // Assuming you're using react-router-dom
  const { athleteRank } = useParams(); // Assuming you're using react-router-dom
  const apiKey = process.env.REACT_APP_TENNIS_KEY;
  const url = `https://api.api-tennis.com/tennis/?method=get_players&player_key=${athleteId}&APIkey=${apiKey}`;
  const [athlete, setAthlete] = useState(null);
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [flagError, setFlagError] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  const fetchData = async () => {
    try {
      // Fetch countries data first
      const countriesResponse = await axios.get("/files/countries.json");
      setCountries(countriesResponse.data);

      // Then fetch athlete data
      const athleteResponse = await axios.get(url);

      if (athleteResponse.data.error) {
        console.log(athleteResponse.data.result);  
        console.log(athleteResponse.data.result[0].msg);  
              throw new Error(athleteResponse.data.result[0].msg);
      }

      const athleteData = athleteResponse.data.result[0];

      // Find and set athlete's flag based on country
      const land = athleteData.player_country;
      console.log(land)
      const matchingCountry = countriesResponse.data.find(
        (country) => country.name.common == land || country.name.official === land
      );

      if (matchingCountry) {
        athleteData.flag = matchingCountry.flags.png;
      } else {
        athleteData.flag =
          "https://media.cnewyork.net/uploads/2021/02/drapeau-americain.jpg";
        //setFlagError(true);
        console.warn("Country flag not found:", land);
      }

      setAthlete(athleteData);
    } catch (error) {
      console.error("Erreur lors de la récupération des données:", error);
      setError(error);
    } finally {
      setIsLoading(false); // Set loading to false once fetch is complete
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Re-run effect when athleteId changes

  if (isLoading) {
    return <div>Chargement en cours...</div>;
  }

  if (error) {
    return <div className="text-center text-danger mt-4 text-uppercase">Une erreur s'est produite : {error.message}</div>;
  }

  if (!athlete) {
    return <div>Athlète introuvable.</div>;
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-8 mx-auto text-center text-light">
          <h1 className="text-secondary">
            {athlete.player_full_name || athlete.player_name || "inconnu"}
              </h1>            <p>
              from {athlete.player_country 
                ? (athlete.player_country === "World" ? "Russia" : athlete.player_country)
              : "Unknown"}
              </p>
            
            <p>
            {(() => {
              try {
                return `${calculateAge(athlete.player_bday)} ans`;
              } catch (error) {
                return "mille ans";
              }
            })()}
          </p>          
            <p>Current Rank: {athleteRank}</p>
            <p>{athlete.flag}</p>
            <br></br>
            <br></br>
            <div className="player-image-container mt-4">
              <img
                className="player-image"
                src={athlete.player_logo}
                alt={athlete.player_name}
              />
               {/* <img
                      className="background-flag"
                      src={athlete.flag}
                      alt={athlete.player_country}
                    /> */}
               {flagError === 0 ? (
                  athlete.player_country === "USA" ? (
                    <img
                      className="flag-background"
                      src="https://media.cnewyork.net/uploads/2021/02/drapeau-americain.jpg"
                      alt={athlete.player_country}
                    />
                  ) : athlete.player_country === "World" ? (
                    <img
                      className="flag-background-russia"
                      src="https://alexandrederussie.com/wp-content/uploads/2020/11/drapeau-russie.jpg"
                      alt='russia'
                    />
                    
                  ) : (
                    <img
                      className="background-flag"
                      src={athlete.flag}
                      alt={athlete.player_country}
                    />
                  )
                ) : (
                <span>No flag</span>
              )} 
             </div>  
             Afficher les autres informations de l'athlète
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Athlete; 
