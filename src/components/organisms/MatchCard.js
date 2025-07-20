import React from 'react';
import EventDetails from '../molecules/EventDetails';

const MatchCard = ({ item, reverseDate, getRank, rankings}) => (
  <div
    key={item.id}
    className={`col-12 col-sm-6 col-md-4 d-flex align-items-stretch text-center padding-responsive le-match`}
  >
    <div className="border border-primary pt-2 d-flex flex-column justify-content-between w-100 rounded">
      <EventDetails item={item} reverseDate={reverseDate} getRank={getRank} rankings={rankings} />
    </div>
  </div>
);

export default MatchCard;
