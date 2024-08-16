// src/components/atoms/Score.jsx
import React from 'react';

const Score = ({ scores }) => (
  <span>
    {scores[0].score_first} - {scores[0].score_second}
    {scores.length >= 2 && (
      <b>
        /{scores[1].score_first} - {scores[1].score_second}
      </b>
    )}
    {scores.length >= 3 && (
      <>
        /{scores[2].score_first} - {scores[2].score_second}
      </>
    )}
  </span>
);

export default Score;
