import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import { calculateAge } from "../functions/mixins";

const Athlete = ({ playerKey }) => {
  //const { athleteId } = useParams(); // Assuming you're using react-router-dom
  // const { athleteRank } = useParams(); // Assuming you're using react-router-dom
  const apiKey = process.env.REACT_APP_TENNIS_KEY;
  const url = `https://api.api-tennis.com/tennis/?method=get_players&player_key=${playerKey}&APIkey=${apiKey}`;
  const [athlete, setAthlete] = useState(null);
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [flagError, setFlagError] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  // const fetchData = async () => {
  //   try {
  //     console.log(playerKey)
  //     console.log(url)
  //     // Fetch countries data first
  //     // const countriesResponse = await axios.get("/files/countries.json");
  //     // setCountries(countriesResponse.data);

  //     const athleteResponse = await axios.get(url);

  //     if (athleteResponse.data.error) {
  //       console.log(athleteResponse.data.result);  
  //       console.log(athleteResponse.data.result[0].msg);  
  //             throw new Error(athleteResponse.data.result[0].msg);
  //     }

  //     const newAthlete = athleteResponse.data.result[0];
  //     setAthlete(newAthlete);      // const athleteData = athleteResponse.data.result[0];
  //     console.log(athlete)
  // Find and set athlete's flag based on country
  // const land = athleteData.player_country;
  // console.log(land)
  // const matchingCountry = countriesResponse.data.find(
  //   (country) => country.name.common == land || country.name.official === land
  // );

  // if (matchingCountry) {
  //   athleteData.flag = matchingCountry.flags.png;
  // } else {
  //   athleteData.flag =
  //     "https://media.cnewyork.net/uploads/2021/02/drapeau-americain.jpg";
  //   //setFlagError(true);
  //   console.warn("Country flag not found:", land);
  // }

  // setAthlete(athleteData);
  //   } catch (error) {
  //     console.error("Erreur lors de la récupération des données:", error);
  //     setError(error);
  //   } finally {
  //     setIsLoading(false); // Set loading to false once fetch is complete
  //   }
  // };

  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);
      setError(null);
            setIsLoading(true);


      try {
        console.log("Fetching athlete for playerKey:", playerKey);
        console.log("URL:", url);

        const response = await axios.get(url);

        if (response.data.error) {
          throw new Error(response.data.result[0]?.msg || "Erreur inconnue");
        }

        const athleteData = response.data.result[0];
        console.log("Athlete data reçu :", athleteData);

        setAthlete(athleteData);
      } catch (err) {
        console.error("Erreur lors du fetch :", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (url) {
      fetchData();
    }
  }, [url]); // Re-run effect when athleteId changes

  // if (isLoading) {
  //   return <div>Chargement en cours...</div>;
  // }

  // if (error) {
  //   return <div className="text-center text-danger mt-4 text-uppercase">Une erreur s'est produite : {error.message}</div>;
  // }

  // if (!athlete) {
  //   return <div>Athlète introuvable.</div>;
  // }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-8 mx-auto text-center text-light">
            {isLoading ? (
      <p>Chargement en cours...</p>
    ) : error ? (
      <p>Erreur : {error}</p>
    ) : athlete ? (
      <>
        <h3>Détails de l'athlète
        <p>Clé joueur : {playerKey}</p>
        <p>Nom complet : {athlete.player_full_name}</p>
        <p>Pays : {athlete.player_country}</p>
        <p>Date de naissance : {athlete.player_bday}</p>
        </h3>
      </>
    ) : (
      <p>Aucun athlète trouvé.</p>
    )}
            {/* <h1 className="text-secondary">
            {athlete.player_full_name || athlete.player_name || "inconnu"}
          </h1>             */}
            {/* <p>
              from {athlete.player_country 
                ? (athlete.player_country === "World" ? "Russia" : athlete.player_country)
              : "Unknown"}
          </p> */}

            {/* <p>
            {(() => {
              try {
                return `${calculateAge(athlete.player_bday)} ans`;
              } catch (error) {
                return "mille ans";
              }
            })()}
          </p>           */}
            {/* <p>Current Rank: {athleteRank}</p> */}
            {/* <p>{athlete.flag}</p> */}
            {/* <br></br>
            <h1> Ceci est un test </h1>
            <h3>{athleteId}</h3>
            <p className="text-info">{url}</p>
            <br></br> */}
            {/* {athlete ? (
              <>
                <h3>Détails de l'athlète</h3>
                <p>Clé joueur : {playerKey}</p>
                <p>Nom complet : {athlete.player_full_name}</p>
                <p>Pays : {athlete.player_country}</p>
                <p>Date de naissance : {athlete.player_bday}</p>
              </>
            ) : (
              <p>Aucun athlète trouvé.</p>
            )} */}

            {/* <div className="player-image-container mt-4"> */}
            {/* <img
                className="player-image"
                src={athlete.player_logo}
                alt={athlete.player_name}
              /> */}
            {/* <img
                      className="background-flag"
                      src={athlete.flag}
                      alt={athlete.player_country}
                    /> */}
            {/* {flagError === 0 ? (
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
             </div>   */}
            {/* Afficher les autres informations de l'athlète */}

          </div>
        </div>
      </div>
    </div >
  );
};

export default Athlete; 
