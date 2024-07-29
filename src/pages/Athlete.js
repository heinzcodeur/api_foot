import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Athlete = () => {
  const { athleteId } = useParams(); // Assuming you're using react-router-dom
  const url = `https://api.api-tennis.com/tennis/?method=get_players&player_key=${athleteId}&APIkey=7b2b2c63e9ff413388c8ca25249f24e4efe31b3f38c5cd3e432ea373cd3e710a`;
  const [athlete, setAthlete] = useState(null);
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  const fetchData = async () => {
    try {
      // Fetch countries data first
      const countriesResponse = await axios.get('/files/countries.json');
      setCountries(countriesResponse.data);

      // Then fetch athlete data
      const athleteResponse = await axios.get(url);
      const athleteData = athleteResponse.data.result[0];

      // Find and set athlete's flag based on country
      const land = athleteData.player_country;
      const matchingCountry = countriesResponse.data.find(
        country => country.name.common === land
      );

      if (matchingCountry) {
        athleteData.flag = matchingCountry.flags.png;
      } else {
        console.warn('Country flag not found:', land);
      }

      setAthlete(athleteData);
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
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
    return <div>Une erreur s'est produite : {error.message}</div>;
  }

  if (!athlete) {
    return <div>Athlète introuvable.</div>;
  }

  return (
    <div>
      <Navigation />
      <h1>{athlete.player_full_name}</h1>
      <p>Current Rank : {athlete.stats[0].rank}</p>
      <img src={athlete.player_logo} alt={athlete.player_name} />
      <br />
      <img src={athlete.flag} alt={athlete.player_country} />
      {/* Afficher les autres informations de l'athlète */}
    </div>
  );
};

export default Athlete;
