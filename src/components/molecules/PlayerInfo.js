// src/components/molecules/PlayerInfo.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import PlayerImg from '../atoms/PlayerImg';

const PlayerInfo = ({ player, playerKey, getRank }) => (
  <div className=" align-items-center mb-2 mt-2">
    <Link to={`/athletes/${playerKey}/${getRank()}`}>
      {player.logo ? <PlayerImg src={player.logo} /> : <i className="fas fa-user rounded-circle"></i>}
    </Link>
    <span className="ml-2 ms-2 text-primary">{player.name}</span>
    <span className="ms-2">&nbsp;{getRank()}</span>
  </div>
);

export default PlayerInfo;
