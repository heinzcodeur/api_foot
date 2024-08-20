// src/components/molecules/PlayerInfo.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import PlayerImg from '../atoms/PlayerImg';

const PlayerInfo = ({ player, playerKey, getRank, position, item }) => {
  // console.log(item);
  return(
    <div >
    <Link to={`/athletes/${playerKey}/${getRank(position, item)}`}>
      {player.logo ? <PlayerImg src={player.logo} /> : <i className="fas fa-user rounded-circle"></i>}
    </Link>
    <span className="ms-2 text-primary">{player.name}</span>&nbsp;
    <span className="ms-2">{getRank(position, item)}</span>
  </div>
  );
};

export default PlayerInfo;
