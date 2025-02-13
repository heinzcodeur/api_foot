// src/components/molecules/PlayerInfo.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import PlayerImg from '../atoms/PlayerImg';

const PlayerInfo2 = ({ player, playerKey, getRank }) => (
  <div className="d-flex align-items-center">
    &nbsp;
    <span className="ms-2 text-primary">{player.name}</span>
    <span className="ms-2">{getRank()}</span>
    <Link to={`/athletes/${playerKey}/${getRank()}`}>
      {player.logo ? <PlayerImg src={player.logo} /> : <i className="fas fa-user rounded-circle"></i>}
    </Link>
  </div>
);

export default PlayerInfo2;
