// PlayerRanking.js
import React, { useState, useEffect } from 'react';
import { getPlayerRanking } from '../utils';

const PlayerRanking = ({ playerName }) => {
  const [rank, setRanking] = useState("N/A");

  useEffect(() => {
    const fetchRanking = async () => {
      try {
        const playerRanking = await getPlayerRanking(playerName);
        setRanking(playerRanking);
      } catch (error) {
        console.error('Erreur lors de la récupération du classement du joueur:', error);
      }
    };

    fetchRanking();
  }, [playerName]);

  return <b className={rank < 10 ? "text-danger" : "text-dark"}>{rank}</b>;
};

export default PlayerRanking;
