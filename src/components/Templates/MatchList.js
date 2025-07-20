// src/components/templates/MatchList.jsx
import React from 'react';
import MatchCard from '../organisms/MatchCard';

const MatchList = ({ matches, reverseDate, getRank, rankings}) => (
  <div className="row">
  {matches ? (
    matches.map((item) => (
      <MatchCard
        key={item.id}
        item={item}
        reverseDate={reverseDate}
        getRank={getRank}
        rankings={rankings}
      />
    ))
  ) : (
    <p>No matches available</p> // Optionnel : message à afficher si matches est vide ou null
  )}
</div>

);

export default MatchList;
