import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PlayerImg from '../atoms/PlayerImg';
import FullScreenModal from '../atoms/FullScreenModal';
import { useModal } from '../../context/ModalContext';
import Athlete from '../../pages/Athlete';

const PlayerInfo = ({ player, playerKey, getRank }) => {

  const [showModal, setShowModal] = useState(false);
  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const { openModal } = useModal();


  return (
    <div className="align-items-center mb-2 mt-2">
      <span onClick={() =>
          openModal("Infos joueur", <Athlete athleteId={player.id} playerKey={playerKey} />)
        }
        style={{ cursor: "pointer" }}
        >
        {player.logo ? (
          <PlayerImg src={player.logo} />
        ) : (
          <i className="fas fa-user rounded-circle"></i>
        )}
      </span>
      <span className="ml-2 ms-2 text-primary" >
        {player.name} 
      </span>
      <span className="ms-2" onClick={handleOpen}>&nbsp;{getRank()}</span>
    </div>
  );
};

export default PlayerInfo;
