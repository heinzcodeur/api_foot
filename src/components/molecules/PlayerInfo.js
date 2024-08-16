// src/components/molecules/PlayerInfo.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import PlayerImg from '../atoms/PlayerImg';

const PlayerInfo = ({ player, playerKey, getRank }) => (
  <div className="d-flex align-items-center">
    <Link to={`/athletes/${playerKey}/${getRank()}`}>
      {player.logo ? <PlayerImg src={player.logo} /> : <i className="fas fa-user rounded-circle"></i>}
    </Link>
    <span className="ms-2 text-primary">{player.name}</span>
    <span className="ms-2">{getRank()}</span>
  </div>
);

export default PlayerInfo;
