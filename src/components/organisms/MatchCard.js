// src/components/organisms/MatchCard.jsx
import React from 'react';
import EventDetails from '../molecules/EventDetails';

const MatchCard = ({ item, reverseDate, getRank, rankings }) => (
  <div
    key={item.id}
    className={`col-12 col-sm-6 col-md-4 d-flex align-items-stretch mb-4 text-center `}
  >
    <div className="border border-primary pt-2 d-flex flex-column justify-content-between w-100 rounded">
      <EventDetails item={item} reverseDate={reverseDate} getRank={getRank} rankings={rankings} />
    </div>
  </div>
);

export default MatchCard;
