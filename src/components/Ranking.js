import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "./Navigation";

const fetchRankings = async (currentApiKey) => {
    try {
      const wtaResponse = await axios.get(rank_wta, {
        headers: {
          "X-RapidAPI-Key": currentApiKey,
        },
      });
      const atpResponse = await axios.get(rank_atp, {
        headers: {
          "X-RapidAPI-Key": currentApiKey,
        },
      });
  
      const wtaRanking = wtaResponse.data.rankings;
      const atpRanking = atpResponse.data.rankings;
  
      // Vous pouvez maintenant utiliser wtaRanking et atpRanking comme vous le souhaitez
      console.log(wtaRanking);
      console.log(atpRanking);
  
      // Vous pouvez également les combiner dans un seul tableau si nécessaire
      const combinedRanking = [...wtaRanking, ...atpRanking];
      console.log(combinedRanking);
  
      // Faites le traitement supplémentaire ici si nécessaire
    } catch (error) {
      console.error("Une erreur s'est produite lors de la récupération des classements :", error);
      // Gérer les erreurs ici
    }
  };