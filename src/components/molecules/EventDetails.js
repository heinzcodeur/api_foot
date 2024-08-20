// src/components/molecules/EventDetails.jsx
import React from 'react';
import Score from '../atoms/Score';
import PlayerInfo from './PlayerInfo';

const EventDetails = ({ item, reverseDate, getRank, rankings }) => (
  <ul className="text-light flex-grow-1 d-flex flex-column justify-content-between list-unstyled">
    <li>
      <PlayerInfo player={{ logo: item.event_first_player_logo, name: item.event_first_player }} playerKey={item.first_player_key} getRank={() => getRank(1, item, rankings)} />
      <span> VS </span>
      <PlayerInfo player={{ logo: item.event_second_player_logo, name: item.event_second_player }} playerKey={item.second_player_key} getRank={() => getRank(2, item, rankings)} />
    </li>
    <li><p>{item.event_type_type}</p></li>
    <li>{item.tournament_round || item.tournament_name}</li>
    <li><p>{reverseDate(item.event_date)} - {item.event_time}</p></li>
    <li className="text-success animated-item" style={{ transition: "color 0.5s" }}><b>{item.event_game_result}</b></li>
    <li>
      <Score scores={item.scores} />
      <p className="text-primary">{item.event_final_result}</p>
      <p>match key: {item.event_key}</p>
    </li>
  </ul>
);

export default EventDetails;
