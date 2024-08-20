// src/components/organisms/MatchCard.jsx
import React, { useState } from 'react';
import EventDetails from '../molecules/EventDetails';

const MatchCard = ({ item, reverseDate, getRank, rankings }) => {
  const [opacity, setOpacity] = useState(0.4);
  const [col, setCol] = useState(4);

  return (

    
    <div
    key={item.id}
    className={`col-12 col-sm-6 col-md-${col} d-flex align-items-stretch mb-4 text-center p-3`}  
    
    >
    <div className="border border-primary pt-2 d-flex flex-column justify-content-between w-100 rounded"  style={{ background: "black", opacity: opacity }}
      onMouseOver={() => {setOpacity(1); }}
      onMouseOut={() => {setOpacity(0.4); }}>
      <EventDetails item={item} reverseDate={reverseDate} getRank={getRank} rankings={rankings} />
    </div>
  </div>
  )
}

export default MatchCard;
